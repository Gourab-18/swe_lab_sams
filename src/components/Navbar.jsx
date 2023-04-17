import React from "react";

import { MdOutlineAccountCircle } from "react-icons/md";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user1, setUser1] = useState([]);
  const [em, setEm] = useState("");
  const auth = getAuth();

  const [name, setName] = useState("");
  onAuthStateChanged(auth, (user) => {
    // console.log(user.providerData[0].email);

    if (user) {
      const uid = user.uid;
      const temp = user.providerData[0].email;
      const result1 = user1.filter((a) => a.email === temp);
      console.log(result1);
      setName(result1[0].name);
      // console.log(uid);
    } else {
      console.log("Signed Out User");
    }
  });
  const fetchShows = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newExpenses = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUser1(newExpenses);

      //  setVal(true);
    });

    // console.log(user1);
  };
  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <>
      <div className="flex py-2 bg-[rgb(93,78,167)] justify-between  h-12 font-sans font-semibold text-slate-100 ">
        <div className="flex justify-around">
          <Link to="/">
            <div className="	mx-4 ">SAMS</div>
          </Link>
          <Link to="/createShow">
            <div className="	mx-4 ">Create Show</div>
          </Link>
          <Link to="/allshows">
            <div className="	mx-4 ">Shows</div>
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
          <div>{user1 ? name : "User"}</div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Navbar;
