import React from "react";
import newsletterImg from "../assets/newsletterImg.png";

const Newsletter = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-between rounded-3xl p-8 md:p-12 max-w-5xl mx-auto gap-6 md:gap-0">
      {/* Left Section */}
      <div className="md:w-[75%] text-center md:text-left bg-[#0C2E8A] h-full flex-row p-11 rounded-2xl text-white space-y-4 items-center">
        <h2 className="text-3xl font-bold text-center">Stay Updated</h2>
        <p className="text-lg text-center">
          Get notified when we launch new features and find spots near you.
        </p>

        <form className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-md mx-auto h-[40px]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 outline-none text-gray-700 placeholder-gray-400 text-base"
          />
          <button
            type="submit"
            className="bg-[#0C2E8A] text-white h-[32px] px-6 rounded-full font-medium hover:bg-[#0A256E] transition flex items-center justify-center mr-2"
          >
            Join
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="md:w-[25%] ml-8 md:mt-0 flex justify-center items-stretch">
        <div className="bg-[#E7EDFF] rounded-3xl flex items-center justify-center w-full h-full">
          <img
            src={newsletterImg}
            alt="Newsletter illustration"
            className="rounded-2xl w-60 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
