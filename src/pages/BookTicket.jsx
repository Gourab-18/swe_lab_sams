import React from 'react'

const BookTicket = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-2 pt-4">
        <div>
          <h1 className="font-sans my-2 mb-4 font-semibold text-3xl text-slate-100">
           Book a ticket
          </h1>
        </div>

        <div className="">
          <form>
            <div>
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Select a show
              </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Select a Customer
              </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
               Enter Number of Tickets
              </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-light text-gray-400 dark:text-white">
                Select Seat
               </label>
              <input
                type="text"
                className=" border  border-gray-300 text-gray-900 text-sm  block p-2.5 w-[50vw] bg-[rgb(65,66,67)] dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

        
          </form>

          <div className="flex justify-center items-center mt-4">
            
            <div className="">
              <button
                type="button"
                class="text-white   bg-[rgb(210,65,134)] focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium  text-sm px-6 py-2 text-center mb-2 rgb(210,65,134) hover:bg-rgb(212,65,134) focus:bg-rgb(212,65,134) hover:opacity-80"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookTicket