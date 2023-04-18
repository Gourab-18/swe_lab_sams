import React from "react";

import { MdOutlineAccountCircle } from "react-icons/md";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
const Navbar = () => {
  const navigate = useNavigate();

  const [user1, setUser1] = useState([]);
  const [em, setEm] = useState("");
  const auth = getAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // access
  const [mainAcc, setMainAcc] = useState(false);
  const [salesPersonAcc, setSalesPersonAcc] = useState(false);

  const [expenseAcc, setExpenseAcc] = useState(false);

  onAuthStateChanged(auth, (user) => {
    // console.log(user.providerData[0].email);

    if (user) {
      const uid = user.uid;
      const temp = user.providerData[0].email;
      const result1 = user1.filter((a) => a.email === temp);
      // console.log(result1);
      // setName(result1[0].name);
      // setEmail(result1[0].email);
      localStorage.setItem(
        "currUser",
        result1[0] ? JSON.stringify(result1[0]) : ""
      );
      // console.log(result1[0].email);

      if (result1[0].email === "gourabomm2001@gmail.com") {
        // setMainAcc(true);
      }
      // console.log(uid);
    } else {
      console.log("Signed Out User");
    }
  });
  const currUser =
    localStorage.getItem("currUser") &&
    JSON.parse(localStorage.getItem("currUser"));

  useEffect(() => {
    // console.log(email);

    if (currUser && currUser.email === "gourabomm2001@gmail.com") {
      setMainAcc(true);
      setName(currUser.name);
    } else if (currUser) {
      // it may be a salesperson
      console.log("I am in else if");
      let a = accountants.filter(
        (accountant) => accountant.reason === currUser.email
      );
            setName(currUser.name);


      console.log(a, "I am else if");
      if (a.length > 0) {
        setSalesPersonAcc(true);
        console.log("I am salesperson");
      } else {
        setExpenseAcc(true);
        console.log("I am not salesperson");
      }
    }
    // else if(currUser &&
  }, [currUser]);

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

  // console.log(user1);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });

    localStorage.removeItem("currUser");

    window.location.reload();
    navigate("/");
  };

  const [accountants, setAccountants] = useState([]);
  const fetchAccountants = async () => {
    await getDocs(collection(db, "accountants")).then((querySnapshot) => {
      const newShows = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAccountants(newShows);
      // console.log(accountants);
    });
  };
  useEffect(() => {
    fetchShows();
    fetchAccountants();
  }, []);

  return (
    <>
      <div className="flex py-2 bg-[rgb(93,78,167)] justify-between  h-12 font-sans font-semibold text-slate-100 ">
        <div className="flex justify-around">
          <Link to="/">
            <div className="	mx-4 ">SAMS</div>
          </Link>
          {mainAcc && (
            <Link to="/createShow">
              <div className="	mx-4 ">Create Show</div>
            </Link>
          )}
          {}
          <Link to="/allshows">
            <div className="	mx-4 ">Shows</div>
          </Link>

          {salesPersonAcc && (
            <Link to="/bookticket">
              <div className="	mx-4 ">Book</div>
            </Link>
          )}

          {mainAcc && (
            <Link to="/accountants">
              <div className="	mx-4 ">Accountants</div>
            </Link>
          )}
          {mainAcc && (
            <Link to="/salesperson">
              <div className="	mx-4 ">Transactions</div>
            </Link>
          )}

          {(expenseAcc == true || mainAcc == true) && (
            <Link to="/addexpense">
              <div className="	mx-4 ">Add Expense</div>
            </Link>
          )}

          {mainAcc && (
            <Link to="/expenses">
              <div className="	mx-4 ">View Expenses</div>
            </Link>
          )}
        </div>

        <div className=" flex  mx-4 px-4 justify-between">
          {name && (
            <div className="mt-1" onClick={handleLogout}>
              <FiLogOut />
            </div>
          )}

          <div className=" mt-1 mx-1">
            <Link to="/signup">
              <MdOutlineAccountCircle />
            </Link>
          </div>
          <div> {name ? name : "User"}</div>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Navbar;
