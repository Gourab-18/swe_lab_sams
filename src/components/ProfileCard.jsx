import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const ProfileCard = ({ amount, id }) => {
  // console.log(id);

  const deleteData = async (id, e) => {
    e.stopPropagation();
    const docRef = doc(db, "accountants", id);
    await deleteDoc(docRef);
  };
  return (
    <>
      <div className="h-[17vh] w-[20vw] bg-[rgb(65,66,67)] flex flex-col justify-between">
        <div className=" m-2 flex gap-2">
          <div className="bg-[rgb(82,83,83)] w-6 h-6 rounded-full flex justify-center items-center">
            {amount.charAt(0)}
          </div>
          <div>
            <h1>{amount}</h1>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="text-white   bg-[rgb(210,65,134)] hover:opacity-80 font-medium  my-1 mx-2 text-sm px-6 py-2 text-center "
            onClick={(e)=>deleteData(id,e)}
          >
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
