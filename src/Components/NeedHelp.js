import React from 'react';

const NeedHelp = () => {
  return (
    <div className="card p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Need Help?</h2>
      <p className="mb-4">Have a question? We want to make it easy to find what you're looking for. Get answers online fast.</p>
      <ul className="list-none">
        <li className="mb-2"><a className="text-blue-600 hover:underline" href="tel:2164442200">216.444.2200</a></li>
        <li className="mb-2"><a className="text-blue-600 hover:underline" href="#visiting-main-campus">Visiting our main campus</a></li>
        <li className="mb-2"><a className="text-blue-600 hover:underline" href="#pay-bill">Pay your bill online</a></li>
        <li className="mb-2"><a className="text-blue-600 hover:underline" href="#mychart">MyChart</a></li>
        <li className="mb-2"><a className="text-blue-600 hover:underline" href="#request-medical-records">Request your medical records</a></li>
      </ul>
    </div>
  );
};

export default NeedHelp;
