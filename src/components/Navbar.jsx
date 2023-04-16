import React from "react";

import { MdOutlineAccountCircle } from "react-icons/md";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex py-2 bg-[rgb(93,78,167)] justify-between  h-12 font-sans font-semibold text-slate-100 ">
        <div className="flex justify-around">
          <Link to="/">
            <div className="	mx-4 ">SAMS</div>
          </Link>
          <Link to="/allshows">
            <div className="	mx-4 ">Shows</div>
          </Link>
          <Link to="/createShow">
            <div className="	mx-4 ">CreateShow</div>
          </Link>
          <Link to="/bookticket">
            <div className="	mx-4 ">Book</div>
          </Link>
          <Link to="/accountants">
            <div className="	mx-4 ">Accountants</div>
          </Link>
          <Link to="/salesperson">
            <div className="	mx-4 ">Transactions</div>
          </Link>
          <Link to="/addexpense">
            <div className="	mx-4 ">Add Expense</div>
          </Link>
          <Link to="/expenses">
            <div className="	mx-4 ">View Expenses</div>
          </Link>
        </div>

        <div className=" flex  mx-4 px-4 justify-between">
          <div className=" mt-1 mx-1">
            <Link to="/signup">
              <MdOutlineAccountCircle />
            </Link>
          </div>
          <div>User</div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Navbar;
