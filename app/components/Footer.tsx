import React from "react";

export default function Footer() {
  return (
      <div className=" max-w-[1100px] grid grid-cols-2   m-auto mt-10 h-[140px] bg-secondaryColor rounded-xl">
        <div>
        <h1 className=" mt-10 text-center   font-bold text-4xl text-whiteColor">
        STAY UPTO DATE ABOUT OUR LATEST OFFERSn 
        </h1>
      </div>
      <div className=" flex flex-col  ">
        <input className=" h-10 w-[200px]" type="text" placeholder=" Enter your Email Address" />
        <button className=" h-[20px] w-[200px] text-xs bg-white text-textColor font-medium">Subscribe to Newsletter</button>
        </div>
      </div>
  );
}
