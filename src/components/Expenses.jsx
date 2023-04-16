import React from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const [totalExpense, setTotalExpense] = useState(0);

  const [val, setVal] = useState(false);
  const fetchShows = async () => {
    await getDocs(collection(db, "expenses")).then((querySnapshot) => {
      const newExpenses = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setExpenses(newExpenses);

      setVal(true);
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 pt-4">
        <div>
          <h1 className="font-sans my-2 mb-4 font-semibold text-3xl text-slate-100">
            Detailed Expenses
          </h1>
        </div>

        {val && (
          <>
            <div class="relative shadow-md sm:rounded-lg w-[80vw]  bg-[rgb(55,56,56)] mt-6">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs uppercase dark:text-gray-400">
                  <tr className="font-sans font-semibold text-slate-10">
                    <th scope="col" class="px-6 py-3  ">
                      Amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expenses?.map(({ amount, reason }) => {
                    console.log(expenses);
                    return (
                      <tr class="border-b border-gray-200 dark:border-gray-700 font-sans font-semibold text-slate-10">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                        >
                          {amount && amount}
                        </th>
                        <td class="px-6 py-4 font-sans font-semibold text-slate-10">
                          {reason && reason}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-12">
              <button class="text-white   bg-[rgb(210,65,134)] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 rgb(210,65,134) hover:bg-rgb(212,65,134) focus:bg-rgb(212,65,134) hover:opacity-80">
                <h1>
                  Total:{" "}
                  {expenses.reduce((a, v) => (a = a + parseInt(v.amount)), 0)}
                </h1>
              </button>
            </div>
          </>
        )}
        {!val && (
          <button
            onClick={fetchShows}
            className="text-white mt-6   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            View Expenses
            {/* {parseInt(expenses[0].amount) + 1} */}
          </button>
        )}
      </div>

      {val && (
        <div className="mt-4 flex justify-center items-center">
          <Link to="/">
            <button
              type="button"
              class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Back
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Expenses;
