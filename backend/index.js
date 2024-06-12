import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import cron from 'node-cron';



const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL).then(() => {
    console.log("connected");
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    });
}).catch((err) => console.log("error", err));

const hospitalSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    email: String
});

const specialitySchema = new mongoose.Schema({
    name: String,
});

const doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    phone: String,
    about: String,
    qualifications: [String],
    languages: [String],
    work_experience: String,
    hospital_ids: { type: mongoose.Schema.Types.ObjectId, ref: 'hospitals', required:true},
    speciality_ids: { type: mongoose.Schema.Types.ObjectId, ref: 'specializations',   required: true},
});
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String
});

const bookingSchema = new mongoose.Schema({
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',  
      required: true
    },
    docid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'doctors', 
      required: true
    },
    time: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    status:{
        type:String,
        required: true
    }
  });

const hospitalModel = mongoose.model("hospitals", hospitalSchema);
const specialtyModel = mongoose.model("specializations", specialitySchema);
const Doctor = mongoose.model('doctors', doctorSchema);
const User = mongoose.model('users', userSchema);
const Booking=mongoose.model('bookings',bookingSchema);

app.get("/getHospitals", async (req, res) => {
    const userData = await hospitalModel.find();
    res.json(userData);
});

app.get("/getSpecialities", async (req, res) => {
    const userData = await specialtyModel.find();
    res.json(userData);
});

app.post("/getDoctors", async (req, res) => {
    const hospital = await hospitalModel.findOne({ name: req.body.hospitalname });
    if (!hospital) {
        console.log(`Hospital named ${req.body.hospitalname} not found`);
        return;
    }

    const specialty = await specialtyModel.findOne({ name: req.body.specializationName });
    if (!specialty) {
        console.log(`Specialty named ${req.body.specializationName} not found`);
        return;
    }

    console.log(hospital._id);
    console.log(specialty._id);
    const doctors = await Doctor.aggregate([
        {
            $match: {
                hospital_ids: hospital._id,
                speciality_ids: specialty._id,
            }
        },
        {
            $lookup: {
                from: 'hospitals',
                localField: 'hospital_ids',
                foreignField: '_id',
                as: 'hospital_details'
            }
        },
        {
            $unwind: "$hospital_details"   // Optionally unwind the joined documents if you need individual specializations
        },
        {
            $lookup: {
                from: 'specializations',
                localField: 'speciality_ids',
                foreignField: '_id',
                as: 'specialty_details'
            }
        },
        {
            $unwind: "$specialty_details"   // Optionally unwind the joined documents if you need individual specializations
          }
    ]);
    res.json(doctors);
});

// Route to insert a new doctor
app.post("/addDoctor", async (req, res) => {
    const { name, email,password, phone, about, qualifications, languages, work_experience, hospital_ids, speciality_ids } = req.body;

    try {
        // Log the received data for debugging
        console.log('Received data:', { name, email, phone, about, qualifications, languages, work_experience, hospital_ids, speciality_ids });

        // Create new doctor
        const newDoctor = new Doctor({
            name,
            email,
            password,
            phone,
            about,
            qualifications,
            languages,
            work_experience,
            hospital_ids,
            speciality_ids
        });

        // Save the doctor to the database
        await newDoctor.save();

        res.status(201).json({ message: "Doctor added successfully", doctor: newDoctor });
    } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.post("/addUser", async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        // Create new doctor
        const newUser = new User({
            name,
            email,
            phone,
            password
        });

        // Save the doctor to the database
        await newUser.save();

        res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/addBooking", async (req, res) => {
    const { userid, docid, time, date } = req.body;
  
    console.log("Received values:", { userid, docid, time, date }); 
    const status='pending' // Debugging log
  
    try {
      const newBooking = new Booking({
        userid,
        docid,
        time,
        date,
        status
      });
  
      await newBooking.save();
  
      res.status(201).json({ message: "Booking added successfully", booking: newBooking });
    } catch (error) {
      console.error("Error adding bookings:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  app.post("/getTimings", async (req, res) => {
    const { docid } = req.body;
  
    try {
      const bookings = await Booking.find({ docid: docid });
  
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/getBookingsUser", async (req, res) => {
    const { userid,status } = req.body;
  
    try {
      const bookings = await Booking.aggregate([
        {
          $match: { userid: new mongoose.Types.ObjectId(userid) },
          $match: { status:status }  // Convert userid to ObjectId
        },
        {
          $lookup: {
            from: "doctors",              // Join with the Doctor collection
            localField: "docid",          // Field in Booking collection
            foreignField: "_id",          // Field in Doctor collection
            as: "doctorDetails"           // Alias for joined documents
          }
        },
        {
          $unwind: "$doctorDetails"       // Unwind the joined documents
        },
        {
          $lookup: {
            from: "specializations",      // Join with the Specialization collection
            localField: "doctorDetails.speciality_ids",  // Field in Doctor collection
            foreignField: "_id",          // Field in Specialization collection
            as: "specialty_details"       // Alias for joined documents
          }
        },
        {
          $unwind: "$specialty_details"   // Optionally unwind the joined documents if you need individual specializations
        }
      ]);
  
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  
  cron.schedule('0 0 * * *', async () => {  // Runs every day at midnight
    const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    console.log(today)
    try {
        const result = await Booking.deleteMany({ date: { $lt: today } });
        console.log(`${result.deletedCount} expired bookings removed`);
    } catch (error) {
        console.error("Error removing expired bookings:", error);
    }
});