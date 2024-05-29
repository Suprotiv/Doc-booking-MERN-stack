import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

const app=express()
app.use(cors())
app.use(express.json())

dotenv.config()

const PORT=process.env.PORT;
const mongoURL=process.env.MONGO_URL;


mongoose.connect(mongoURL).then(()=>{
    console.log("connected")
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })
}).catch((err)=>console.log("error",err));

const hospitalSchema= new mongoose.Schema({
    name:String,
    address:String,
    phone:String,
    email:String
})
const specialitySchema= new mongoose.Schema({
    name:String,
})
const doctorSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    hospital_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'hospitals' }],
    speciality_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'specializations' }],
  });

const hospitalModel=mongoose.model("hospitals",hospitalSchema);

const specialtyModel=mongoose.model("specializations",specialitySchema);

const Doctor = mongoose.model('doctors', doctorSchema);

app.get("/getHospitals",async(req,res)=>{
    const userData=await hospitalModel.find();
    res.json(userData)
})

app.get("/getSpecialities",async(req,res)=>{
    const userData=await specialtyModel.find();
    res.json(userData)
})

app.post("/getDoctors",async(req,res)=>{
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
     console.log(hospital._id)
     console.log(specialty._id)
     const doctors = await Doctor.aggregate([
        {
          $match: {
            hospital_ids: hospital._id,
            specializations: specialty._id,
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
          $lookup: {
            from: 'specializations',
            localField: 'specializations',
            foreignField: '_id',
            as: 'specialty_details'
          }
        }
      ]);
      res.json(doctors)

      
})

