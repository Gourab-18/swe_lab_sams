import React from "react";

import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="flex py-2 bg-[rgb(93,78,167)] justify-between  h-12 font-sans font-semibold text-slate-100 ">
        <div className="	mx-4 ">Student Auditorium Management System (SAMS)</div>
        <div className=" flex  mx-4 px-4 justify-between">
          <div className=" mt-1 mx-1">
            <MdOutlineAccountCircle />
          </div>
          <div>User</div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Navbar;
