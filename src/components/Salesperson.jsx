import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Salesperson = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-[70vh] font-sans font-semibold text-slate-100 ">
        <div className="mb-4">
          <h1 className="font-sans my-2 mb-4 font-semibold text-3xl text-slate-100">
            Sales Persons
          </h1>
        </div>
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
                <th scope="col" class="px-6 py-3"></th>
                {/* <th scope="col" class="px-6 py-3">
                </th> */}
                {/* <th scope="col" class="px-6 py-3">
                  Balcony Ticket Cost
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 dark:border-gray-700 font-sans font-semibold text-slate-10">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Gourab
                </th>
                <td class="px-6 py-4 font-sans font-semibold text-slate-10">
                  10
                </td>
                <td class="px-6 py-4 ">5000</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    class="text-white  uppercase  hover:opacity-80  bg-[rgb(210,65,134)] font-medium rounded-l text-sm px-3 py-3 text-center "
                  >
                    All Transactions
                  </button>
                </td>
                <td class="px-6 py-4 hover:opacity-50">
                  <BsFillTrashFill />
                </td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700 font-sans font-semibold text-slate-10">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Gourab
                </th>
                <td class="px-6 py-4 font-sans font-semibold text-slate-10">
                  10
                </td>
                <td class="px-6 py-4 ">5000</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    class="text-white  uppercase  hover:opacity-80  bg-[rgb(210,65,134)] font-medium rounded-l text-sm px-3 py-3 text-center "
                  >
                    All Transactions
                  </button>
                </td>
                <td class="px-6 py-4 hover:opacity-50">
                  <BsFillTrashFill />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
