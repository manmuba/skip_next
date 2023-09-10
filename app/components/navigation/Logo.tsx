"use client";

import { LuSearch } from "react-icons/lu";

const Logo = () => {
  return (
    <div className="flex flex-row items-center gap-5">
      <h6 className="flex items-center font-extrabold text-sky-600">Logo</h6>
      <div className="hidden flex-row items-center md:flex ">
        <input
          type="text"
          className="p-1 bg-neutral-200 rounded-full w-[23vw]"
        />
        <LuSearch 
            className="font-extrabold text-orange-500 cursor-pointer relative right-8"
            size="24"
        />
      </div>
    </div>
  );
};

export default Logo;
