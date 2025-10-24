import { useState } from "react";
import AddNewSpot from "../components/AddSpotForm";

const SubmitPage = () => {
  const [showForm, setShowForm] = useState(false); 

  const handleButtonClick = () => {
    setShowForm(true); 
  };

  const handleClose = () => {
    setShowForm(false); 
  };

  return (
    <div className="flex bg-white min-h-screen">

      {/* Left Side */}
      <div className="px-6 py-10 text-center w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-[#0C2E8A]">Submit a Spot</h1>
        <p className="mt-4 text-gray-700">Use this page to share your favorite Amala spots!</p>
        <button
          onClick={handleButtonClick}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700"
        >
          Submit a Spot
        </button>
      </div>

      {/* Right Side */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full md:w-1/2 h-full p-10 relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
            <AddNewSpot />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitPage;
