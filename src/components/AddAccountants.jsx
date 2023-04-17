import React, { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const AddAccountants = () => {
  const [amount, setAmount] = useState("");

  const [reason, setReason] = useState("");

  const [expenses, setExpenses] = useState([]);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  // reason
  const handleReason = (e) => {
    setReason(e.target.value);
  };

  const addExpense = async (event) => {
    event.preventDefault();

    const newExpense = {
      amount: amount,
      reason: reason,
    };

    // setShows([...shows, newShow]);
    setAmount(0);
    setReason("");
    try {
      const docRef = await addDoc(collection(db, "accountants"), {
        ...newExpense,
      });
      console.log(newExpense);
      setExpenses([...expenses, newExpense]);

      // console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 pt-4">
        <div className="">
          <form>
            <div className="my-4">
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Accountant Name
              </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
                value={amount}
                onChange={handleAmount}
              />
            </div>
            <div className="my-4">
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Accountant email
              </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
                value={reason}
                onChange={handleReason}
              />
            </div>
          </form>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              class="text-white  uppercase mt-4 hover:opacity-80  bg-[rgb(210,65,134)] font-medium  text-sm px-6 py-3 text-center mb-2"
              onClick={addExpense}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <Link to="/accountants">
        <div className="mt-4 flex justify-center items-center">
          <button
            type="button"
            class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
           Back
          </button>
        </div>
      </Link>
    </>
  );
};

export default AddAccountants;
