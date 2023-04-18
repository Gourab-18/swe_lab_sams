import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function AuditoriumManager() {
  const [shows, setShows] = useState([]);
  const [showName, setShowName] = useState("");
  const [balconyprice, setBalconyPrice] = useState("");
  const [ordinaryprice, setOrdinaryPrice] = useState("");

  const handleShowNameChange = (event) => {
    setShowName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setBalconyPrice(event.target.value);
  };
  const handleOrdinaryPriceChange = (event) => {
    setOrdinaryPrice(event.target.value);
  };

  const handleAddShow = async (event) => {
    event.preventDefault();

    const newShow = {
      name: showName,
      balconyprice: balconyprice,
      ordinaryprice: ordinaryprice,
    };

    // setShows([...shows, newShow]);
    setShowName("");
    setBalconyPrice("");
    setOrdinaryPrice("");
    try {
      const docRef = await addDoc(collection(db, "shows"), {
        ...newShow,
      });
      // console.log(newShow);
      setShows([...shows, newShow]);

      // console.log(docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchShows = async () => {
    await getDocs(collection(db, "shows")).then((querySnapshot) => {
      const newShows = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setShows(newShows);
      console.log(shows.length);
    });
  };

  useEffect(() => {
    fetchShows();
  }, []);
  return (
    <div>
      <h1>Student Auditorium Management Software</h1>
      <form>
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
          Balcony seat Price:
          <input
            type="text"
            value={balconyprice}
            onChange={handlePriceChange}
            className="border-2 border-sky-500"
          />
        </label>
        <br />
        <label>
          Ordinary seat Price:
          <input
            type="text"
            value={ordinaryprice}
            onChange={handleOrdinaryPriceChange}
            className="border-2 border-sky-500"
          />
        </label>
        <button type="submit" onClick={handleAddShow}>
          Add Show
        </button>
      </form>
      <h2>Shows</h2>
      <ul>
        {shows?.map((show, index) => (
          <li key={index}>
            <div className="flex">
              <div>{show.name} - </div>
              <div className="flex ">
                <div>Balcony:${show.balconyprice}</div>

                <div>Ordinary:${show.ordinaryprice}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* <button onClick={handleAddShow}>AddData</button> */}
      {/* <button onClick={fetchShows}>FetchData</button> */}
    </div>
  );
}

export default AuditoriumManager;
