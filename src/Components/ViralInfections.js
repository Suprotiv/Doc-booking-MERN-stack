import React, { useState, useRef } from 'react';

const organDiseases = {
  brain: ['JC virus', 'Measles', 'LCM virus', 'Arbovirus', 'Rabies'],
  throat: ['Rhinoviruses', 'Parainfluenza virus', 'Respiratory syncytial virus'],
  skin: ['Varicella zoster virus', 'Human herpesvirus 6', 'Smallpox', 'Molluscum contagiosum', 'Human papillomavirus'],
  heart: ['Coxsackieviruses', 'Adenovirus', 'Cytomegalovirus', 'HIV'],
  lungs: ['Influenza virus', 'Adenovirus', 'Coronavirus', 'SARS-CoV-2'],
  liver: ['Hepatitis A virus', 'Hepatitis B virus', 'Hepatitis C virus'],
  stomach: ['Helicobacter pylori', 'Norovirus', 'Rotavirus'],
  intestines: ['Norovirus', 'Rotavirus', 'Astrovirus', 'Adenovirus', 'Enteric coronavirus', 'Cytomegalovirus'],
  // Add other organs and their related diseases here...
};

const organPositions = {
  brain: { top: '1%', left: '46%',width: '7%', height: '12%' },
  throat: { top: '15%', left: '50%', width: '1.5%', height: '17%' },
  skin: { top: '45%', left: '41%', width: '3%', height: '30%' },
  heart: { top: '35%', left: '49%', width: '3%', height: '8%' },
  lungs: { top: '30%', left: '46%', width: '3%', height: '17%' },
  liver: { top: '45%', left: '48%', width: '3%', height: '6%' },
  intestines: { top: '60%', left: '48%', width: '5%', height: '10%' },
  stomach: { top: '48%', left: '52%', width: '3%', height: '6%' },
  // Add other organs and their positions here...
};

/*const organPositions = {
    brain: { top: '5%', left: '46%',width: '7%', height: '12%' },
    throat: { top: '22%', left: '48.7%', width: '1.5%', height: '17%' },
    skin: { top: '80%', left: '40%', width: '1%', height: '2%' },
    heart: { top: '57%', left: '50%', width: '1%', height: '2%' },
    lungs: { top: '45%', left: '52%', width: '1%', height: '2%' },
    liver: { top: '68%', left: '47%', width: '1%', height: '2%' },
    intestines: { top: '85%', left: '50%', width: '1%', height: '2%' },
    stomach: { top: '73%', left: '51%', width: '1%', height: '2%' },
    // Add other organs and their positions here...
  };*/

const tooltipOffsets = {
  brain: { x: 20, y: 400 },
  throat: { x: 0, y: -200 },
  skin: { x: -340, y: 500 },
  heart: { x: 20, y: 50 },
  lungs: { x: -250, y: 50 },
  liver: { x: 20, y: -250 },
  stomach: { x: 0, y: -250 },
  intestines: { x: 20, y: 700 },
  // Define offsets for other organs as needed
};

function ViralInfections() {
  const [hoveredOrgan, setHoveredOrgan] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipTimeout = useRef(null);

  const handleMouseEnter = (organ, event) => {
    if (tooltipTimeout.current) {
      clearTimeout(tooltipTimeout.current);
    }

    const rect = event.target.getBoundingClientRect();
    const offsetX = rect.width / 2 + (tooltipOffsets[organ]?.x || 0); // Center horizontally and apply custom offset
    const offsetY = -rect.height / 2 + (tooltipOffsets[organ]?.y || 0); // Adjust vertically and apply custom offset

    setHoveredOrgan(organ);
    setTooltipPosition({
      top: rect.top + offsetY + window.scrollY,
      left: rect.left + offsetX + window.scrollX,
    });
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    tooltipTimeout.current = setTimeout(() => {
      setIsTooltipVisible(false);
    }, 100); // Slight delay to prevent flickering
  };

  return (
    <div className="App p-4 relative z-[0]">
      <h2 className="text-5xl font-bold mb-4 flex justify-center p-5">Viral Infections</h2>
      <div className="relative flex justify-center">
        <img
          src="/IMG_7205.png" // Update the path as needed
          alt="Viral infections"
          className="w-full h-auto"
          style={{ maxWidth: '30%', height: '30%' }} // Adjust size here
        />
        {Object.keys(organPositions).map((organ, idx) => (
          <div
            key={organ}
            className={`absolute ${getMarkerClass(organ)}`} // Dynamically set class
            style={{
              top: organPositions[organ].top,
              left: organPositions[organ].left,
              width: organPositions[organ].width,
              height: organPositions[organ].height,
            }}
            onMouseEnter={(event) => handleMouseEnter(organ, event)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-full flex justify-center items-center font-extrabold text-lg hover:text-white transition ease-out duration-300">{idx + 1}</div>
          </div>
        ))}
      </div>
      {isTooltipVisible && hoveredOrgan && (
        <div
          className="absolute bg-white border border-gray-300 p-4 rounded-lg shadow-lg z-50 "
          style={{ top: tooltipPosition.top, left: tooltipPosition.left, transform: 'translate(30%, -1350%)' }}
          onMouseEnter={() => {
            if (tooltipTimeout.current) {
              clearTimeout(tooltipTimeout.current);
            }
            setIsTooltipVisible(true);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-xl font-semibold">
            {hoveredOrgan.charAt(0).toUpperCase() + hoveredOrgan.slice(1)}
          </h2>
          <ul className="list-disc ml-5 mt-2">
            {organDiseases[hoveredOrgan].map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Function to determine the marker class based on organ type
function getMarkerClass(organ) {
  return 'w-4 h-4   flex justify-center items-center transition-all shadow-sm duration-300  cursor-pointer ' + {
    brain: 'rounded-full',
    throat: 'rounded-md',
    skin: '',
    heart: '',
    lungs: '',
    liver: '',
    stomach: '',
    intestines: '',
  }[organ];
}

export default ViralInfections;
