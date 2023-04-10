import React from 'react'
import {HiOutlineViewList} from "react-icons/hi";
import { MdCalendarViewDay } from "react-icons/md";

const UserDashboard = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8 flex-col">
        <div className="mb-4 ">
          <h1 className="font-sans mb-4 font-semibold text-3xl text-slate-100">
            User Dashboard
          </h1>
        </div>
        <div className="flex flex-col gap-10 justify-center">
          <div className="flex gap-6 items-center hover:opacity-75">
            {" "}
            <HiOutlineViewList /> <p>View Shows</p>
          </div>
          <div className="flex items-center gap-6 hover:opacity-75 ">
            {" "}
            <MdCalendarViewDay /> <p>View your tickets</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard