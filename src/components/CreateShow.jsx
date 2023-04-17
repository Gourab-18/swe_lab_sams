import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { Link } from "react-router-dom";
const CreateShow = () => {
  const [time, setTime] = useState("");
  const [shows, setShows] = useState([]);
  const [showName, setShowName] = useState("");
  const [date, setDate] = useState("");
  const [balconySeats, setBalconySeats] = useState("");
  const [regularSeats, setRegularSeats] = useState("");

  const [balconyprice, setBalconyPrice] = useState("");
  const [ordinaryprice, setOrdinaryPrice] = useState("");

  const [showCreated, setShowCreated] = useState(false);

  const handleShowNameChange = (event) => {
    setShowName(event.target.value);
  };

  const handleRegularSeats = (e) => {
    setRegularSeats(e.target.value);
  };
  const handleBalconySeats = (e) => {
    setBalconySeats(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handlePriceChange = (event) => {
    setBalconyPrice(event.target.value);
  };
  const handleOrdinaryPriceChange = (event) => {
    setOrdinaryPrice(event.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleShowChange = () => {
    setShowCreated(true);
    setTimeout(() => {
      setShowCreated(false);
    }, 2000);
  };

  const handleAddShow = async (event) => {
    event.preventDefault();

    const newShow = {
      name: showName,
      date: date,
      time: time,
      regularSeats: regularSeats,
      balconySeats: balconySeats,
      balconyprice: balconyprice,
      ordinaryprice: ordinaryprice,
    };

    // setShows([...shows, newShow]);
    setShowName("");
    setBalconyPrice("");
    setOrdinaryPrice("");
    setBalconySeats("");
    setRegularSeats("");
    setDate("");
    setTime("");
    try {
      const docRef = await addDoc(collection(db, "shows"), {
        ...newShow,
      });
      console.log(newShow);
      setShows([...shows, newShow]);

      // console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    handleShowChange();
  };

  const fetchShows = async () => {
    await getDocs(collection(db, "shows")).then((querySnapshot) => {
      const newShows = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setShows(newShows);
      // console.log(shows.length);
    });
  };

  useEffect(() => {
    fetchShows();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 pt-4">
        <div>
          <h1 className="font-sans my-2 mb-4 font-semibold text-3xl text-slate-100">
            Create Show
          </h1>
        </div>

        <div className="">
          <form>
            <div>
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Show name
              </label>
              <input
                type="text"
                value={showName}
                onChange={handleShowNameChange}
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <div className="flex justify-between my-4">
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Show Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={handleDate}
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Show time
                </label>
                <input
                  type="time"
                  placeholder={time}
                  value={time}
                  onChange={handleTime}
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between my-4">
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Number of regular seats
                </label>
                <input
                  type="text"
                  value={regularSeats}
                  onChange={handleRegularSeats}
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Price of regular seats (₹)
                </label>
                <input
                  type="text"
                  value={ordinaryprice}
                  onChange={handleOrdinaryPriceChange}
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between my-4">
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Number of balcony seats
                </label>
                <input
                  type="text"
                  value={balconySeats}
                  onChange={handleBalconySeats}
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Price of balcony seats (₹)
                </label>
                <input
                  type="text"
                  value={balconyprice}
                  onChange={handlePriceChange}
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[15vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
          </form>

          <div className="flex justify-between my-4">
            <div className="">
              <Link to="/">
                <button
                  type="button"
                  class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Back
                </button>
              </Link>
            </div>
            <div className="">
              <button
                type="submit"
                onClick={handleAddShow}
                class="text-white   bg-[rgb(210,65,134)] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 rgb(210,65,134) hover:bg-rgb(212,65,134) focus:bg-rgb(212,65,134) hover:opacity-80"
              >
                Create
              </button>
            </div>
          </div>
        </div>
        {showCreated && <button>Created Successfully</button>}
        {/* <button>Created Successfully</button> */}
      </div>
    </>
  );
};

export default CreateShow;
