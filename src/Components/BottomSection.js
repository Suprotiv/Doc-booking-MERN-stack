import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faMedal, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const BottomSection = () => {
  const features = [
    {
      title: 'Patient-centered care:',
      description: `We don’t just care for your health conditions. We care about you. That means our 
                    providers take the time to listen to what’s important to you before recommending next steps.`,
      icon: faHeartbeat,
    },
    {
      title: 'National recognition:',
      description: `Cleveland Clinic is recognized in the U.S. and throughout the world for its expertise and care.`,
      icon: faMedal,
    },
    {
      title: 'Collaborative providers:',
      description: `You’ll get care from board-certified and fellowship trained experts who work together to create a treatment plan just for you. Only the highest standards ensure excellent outcomes.`,
      icon: faUsers,
    },
    {
      title: 'Innovation and research:',
      description: `We’re focused on today — and tomorrow. Our focus on research and offering the latest options means you can find a wide range of clinical trials and other care that you can’t find elsewhere.`,
      icon: faLightbulb,
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-[6vh] md:mb-[10vh]">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105">
              <div className="text-4xl mb-4 text-blue-600">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
