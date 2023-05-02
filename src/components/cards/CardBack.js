import React from "react";
import { GrUp } from "react-icons/gr";

export default function CardBack({ icon }) {
  return (
    <div className="flex justify-center my-4">
      <button className="py-2 px-2  mb-2 rounded-full bg-[#57007f] mx-64 text-white ">
        <GrUp className="text-4xl " />
      </button>
    </div>
  );
}
