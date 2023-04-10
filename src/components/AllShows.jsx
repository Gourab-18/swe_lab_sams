import React from "react";

const AllShows = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center h-[70vh] font-sans font-semibold text-slate-100 ">
        <div className="mb-4">
            <h1>All Shows</h1>
        </div>
        <div class="relative shadow-md sm:rounded-lg w-[80vw]  bg-[rgb(55,56,56)]">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs uppercase dark:text-gray-400">
              <tr className="font-sans font-semibold text-slate-10">
                <th scope="col" class="px-6 py-3  ">
                  Show name
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3  ">
                  Time
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration(hr)
                </th>
                <th scope="col" class="px-6 py-3">
                  Regular Ticket Cost
                </th>
                <th scope="col" class="px-6 py-3">
                  Balcony Ticket Cost
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200 dark:border-gray-700 font-sans font-semibold text-slate-10">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Pathaan
                </th>
                <td class="px-6 py-4 font-sans font-semibold text-slate-10">
                  08/02/23
                </td>
                <td class="px-6 py-4 ">10pm</td>
                <td class="px-6 py-4">2</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">$999</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Pathaan
                </th>
                <td class="px-6 py-4">08/02/23</td>
                <td class="px-6 py-4 ">10pm</td>
                <td class="px-6 py-4">2</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">$999</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Pathaan
                </th>
                <td class="px-6 py-4">08/02/23</td>
                <td class="px-6 py-4 ">10pm</td>
                <td class="px-6 py-4">2</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">$999</td>
              </tr>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Pathaan
                </th>
                <td class="px-6 py-4">08/02/23</td>
                <td class="px-6 py-4 ">10pm</td>
                <td class="px-6 py-4">2</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">$999</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white"
                >
                  Pathaan
                </th>
                <td class="px-6 py-4">08/02/23</td>
                <td class="px-6 py-4 ">10pm</td>
                <td class="px-6 py-4">2</td>
                <td class="px-6 py-4">$999</td>
                <td class="px-6 py-4">$999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          class="text-white   bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default AllShows;
