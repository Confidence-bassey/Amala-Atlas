import React from "react";
import newsletterImg from "../assets/newsletterImg.png";


const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#0C2E8A] rounded-2xl p-6 md:p-10">

      <div className="flex-1 text-center md:text-left text-white">
        <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
        <p className="mb-4">
          Get notified when we launch new features and find spots near you.
        </p>

        <form className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md mx-auto md:mx-0">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2 outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-[#0C2E8A] text-white px-6 py-2 font-medium hover:bg-[#0A256E] transition"
          >
            Join
          </button>
        </form>
      </div>

      <div className="flex-1 mt-6 md:mt-0 flex justify-center">
        <img
          src={newsletterImg} 
          alt="Smiling Woman"
          className="rounded-2xl max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  );
};

export default Newsletter;
