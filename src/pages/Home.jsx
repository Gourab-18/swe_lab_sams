import React from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <div className="flex justify-around  pt-20">
        <div className="]">
          <img src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1671577724/GN_IMAGE_zjjxdj.png" />
        </div>
        <div className="w-[50vw] ">
          <div>
            <h1 className="text-4xl"> Welcome To our Auditorium</h1>
          </div>
          <div className="mt-12">
            <p>
              Speech, vocal performances and music should all sound clear rather
              than distorted or echoey. Sounds should be loud enough for the
              audience to hear, including those sitting at the very back of the
              auditorium
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
