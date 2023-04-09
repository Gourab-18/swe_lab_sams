import React, { useState } from "react";

function AuditoriumManager() {
  const [shows, setShows] = useState([]);
  const [showName, setShowName] = useState("");
  const [price, setPrice] = useState("");

  const handleShowNameChange = (event) => {
    setShowName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleAddShow = (event) => {
    event.preventDefault();
    const newShow = {
      name: showName,
      price: price,
    };
    setShows([...shows, newShow]);
    setShowName("");
    setPrice("");
  };

  return (
    <div>
      <h1>Student Auditorium Management Software</h1>
      <form onSubmit={handleAddShow}>
        <label>
          Show Name:
          <input
            type="text"
            value={showName}
            onChange={handleShowNameChange}
            className="border-2 border-sky-500"
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
            className="border-2 border-sky-500"
          />
        </label>
        <br />
        <button type="submit">Add Show</button>
      </form>
      <h2>Shows</h2>
      <ul>
        {shows.map((show, index) => (
          <li key={index}>
            <span>{show.name} - </span>
            <span>${show.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuditoriumManager;
