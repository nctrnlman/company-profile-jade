import React from "react";
import Image from "../assets/ervice.png"

function Service() {
  return (
    <>
    <section className="min-h-[85vh] lg:min-h-[90vh] h-[700px] flex items-center overflow-x-hidden bg-[#1190A6]">
      <div className="container justify-between flex flex-col lg:flex-row lg:items-center lg:gap-x-12">
        {/*text */}
        <div className="flex flex-col px-5 mx-5 text-center lg:text-left gap-y-3">
          <h1 className="text-[76px] font-bold leading-[1] lg:text[100px] text-white">
            Our <span> Specialty </span>{" "}
          </h1>
          <p className="text-[#004c9b] text-[31px] font-semibold">
          Supporting your company with all it's digital needs.
          </p>
        </div>

        {/*image */}
        <div className="hidden px-[15px] lg:flex flex-1 max-w-[300px] lg:max-w-[600px]">
          <img className="w-full h-full" src={Image} alt="" />
        </div>
      </div>
    </section>
    </>
  );
}

export default Service;
