import React, { useState } from "react";
import { useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
const BookTicket = () => {
  const [shows, setShows] = useState([]);
  const [op, setOp] = useState([]);
  const [op2, setOp2] = useState([]);

  const [flag, setFlag] = useState(false);
  const [accountants, setAccountants] = useState([]);
  const [a, setA] = useState([]);

  // inputs

  const [showVal, setShowVal] = useState("");
  const [salesPersonName, setShowPersonName] = useState("");
  const [seatType, setSeatType] = useState("");
  const [noTickets, setNoTickets] = useState("");
  const [priceEarned, setPriceEarned] = useState(0);

  const [tickets, setTickets] = useState([]);

  const bookTicket = async () => {
    await fetchShows();
    await fetchAccountants();
  };

  const fetchShows = async () => {
    await getDocs(collection(db, "shows")).then((querySnapshot) => {
      const newShows = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setShows(newShows);

      let arr = [];

      shows.map((show) => {
        arr.push(show.name);
        setOp([...op, show.name]);
      });
      fetchAccountants();

      setOp(arr);
      setFlag(true);
      // console.log(op);
    });
  };

  const fetchAccountants = async () => {
    await getDocs(collection(db, "accountants")).then((querySnapshot) => {
      const newShows = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setAccountants(newShows);
      let arr2 = [];

      accountants?.map((show) => {
        // console.log(show.amount);
        arr2.push(show.amount);
        setOp2([...op2, show.amount]);
      });

      setOp2(arr2);
      // setFlag(true);
      // console.log(op2);
    });
  };

  // Book ticket function

  const getTicketData = async (event) => {
    event.preventDefault();

    const newShow = {
      salesPersonName: salesPersonName,
      noTickets: noTickets,
      seatType: seatType,
      showVal: showVal,
      price: 0,
    };

    // calculate price
    const val = newShow.showVal;
    await fetchA();

    const result1 = a.filter((word) => word.name === val);
    // This gives seatType
    // console.log(result1);
    let price;
    // console.log(newShow.noTickets);
    // let a = parseInt(newShow.noTickets);

    // let b = result1[0].balconyprice;

    if (newShow.seatType === "Balcony") {
      price = parseInt(newShow.noTickets) * parseInt(result1[0].balconyprice);
    } else {
      price = parseInt(newShow.noTickets) * parseInt(result1[0].ordinaryprice);
    }

    // calculate price
    // console.log(price);
    newShow.price = price;
    // console.log(newShow);

    // setShows([...shows, newShow]);
    setShowVal("");
    setShowPersonName("");
    setSeatType("");
    setNoTickets("");

    try {
      const docRef = await addDoc(collection(db, "tickets"), {
        ...newShow,
      });
      // console.log(newShow);
      setTickets([...tickets, newShow]);

      // console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchA = async () => {
    await getDocs(collection(db, "shows")).then((querySnapshot) => {
      const newShows = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setA(newShows);
      // console.log(shows.length);
    });
  };

  useEffect(() => {
    fetchA();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 pt-4">
        <div>
          <h1
            onClick={bookTicket}
            class="text-white   bg-[rgb(210,65,134)] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 rgb(210,65,134) hover:bg-rgb(212,65,134) focus:bg-rgb(212,65,134) hover:opacity-80"
          >
            Book a ticket
          </h1>
        </div>
        {flag && (
          <div className="">
            <form>
              <div>
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select a show
                </label>
                <select
                  id="countries"
                  onChange={(e) => setShowVal(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {op?.map((data, index) => {
                    return (
                      <>
                        <option
                          key={index}
                          value={data}

                          // className=" border  text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)]"
                        >
                          {data}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Salesperson Name
                </label>
                <select
                  id="c"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setShowPersonName(e.target.value)}
                >
                  {op2?.map((val, index) => {
                    return (
                      <>
                        <option
                          key={index}
                          value={val}
                          // className=" border  text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)]"
                        >
                          {val}
                          {/* {console.log(val)} */}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Select type of seat
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setSeatType(e.target.value)}
                >
                  {["Balcony", "Ordinary"].map((data, index) => {
                    return (
                      <>
                        <option
                          key={index}
                          value={data}
                          // className=" border  text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)]"
                        >
                          {data}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                  Enter Number of Tickets
                </label>
                <input
                  type="text"
                  className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                  required
                  value={noTickets}
                  onChange={(e) => setNoTickets(e.target.value)}
                />
              </div>
            </form>

            <div className="flex justify-center items-center mt-4">
              <div className="">
                <button
                  type="button"
                  class="text-white   bg-[rgb(210,65,134)] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 rgb(210,65,134) hover:bg-rgb(212,65,134) focus:bg-rgb(212,65,134) hover:opacity-80"
                  onClick={getTicketData}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookTicket;
