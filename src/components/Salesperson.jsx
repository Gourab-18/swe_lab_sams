import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Salesperson = () => {
  // fetch salesperson and tickets sold by them and price of ticket sold by them
  const [tickets, setTickets] = useState([]);
  const [flag, setFlag] = useState(false);

  const [shows, setShows] = useState([]);

  const fetchSalespersons = async () => {
    await getDocs(collection(db, "tickets")).then((querySnapshot) => {
      const newShows = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setTickets(newShows);

      setFlag(true);
    });
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
  // useEffect(() => {
  //   fetchSalespersons();
  // }, []);

  return (
    <>
      <div className="flex justify-center flex-col items-center h-[70vh] font-sans font-semibold text-slate-100 ">
        <div className="mb-4">
          <h1
            onClick={fetchSalespersons}
            class="text-white  uppercase  hover:opacity-80  bg-[rgb(210,65,134)] font-medium rounded-l text-sm px-3 py-3 text-center "
          >
            View Sales Person Stats
          </h1>
        </div>
        {flag && (
          <div class="relative shadow-md sm:rounded-lg w-[80vw]  bg-[rgb(55,56,56)]">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs uppercase dark:text-gray-400">
                <tr className="font-sans font-semibold text-slate-10">
                  <th scope="col" class="px-6 py-3  ">
                    User name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tickets Sold
                  </th>
                  <th scope="col" class="px-6 py-3  ">
                    Money Earned
                  </th>
                  <th scope="col" class="px-6 py-3">Commision</th>
                  <th scope="col" class="px-6 py-3">
                </th>
                  {/* <th scope="col" class="px-6 py-3">
                  Balcony Ticket Cost
                </th> */}
                </tr>
              </thead>
              <tbody>
                {tickets?.map((ticket) => {
                  return (
                    <tr class="border-b border-gray-200 dark:border-gray-700 font-sans font-semibold text-slate-10">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                      >
                        {ticket.salesPersonName}
                      </th>
                      <td class="px-6 py-4 font-sans font-semibold text-slate-10">
                        {ticket.noTickets}
                      </td>
                      <td class="px-6 py-4 ">{ticket.price}</td>
                      <td class="px-6 py-4">
                        <button
                          type="button"
                          // class="text-white  uppercase  hover:opacity-80  bg-[rgb(210,65,134)] font-medium rounded-l text-sm px-3 py-3 text-center "
                        >
                          {ticket.price * 0.15}
                        </button>
                      </td>
                      <td class="px-6 py-4 hover:opacity-50">
                        <BsFillTrashFill />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-4">
          <Link to="/">
            <button
              type="button"
              class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Salesperson;
