import React from 'react'

const ProfileCard = () => {
  return (
    <>
      <div className="h-[17vh] w-[20vw] bg-[rgb(65,66,67)] flex flex-col justify-between">
        <div className=" m-2 flex gap-2">
          <div className="bg-[rgb(82,83,83)] w-6 h-6 rounded-full flex justify-center items-center">
            A
          </div>
          <div>
            <h1>Gourab</h1>
          </div>
        </div>
        <div>
          <button
            type="button"
            class="text-white   bg-[rgb(210,65,134)] hover:opacity-80 font-medium  my-1 mx-2 text-sm px-6 py-2 text-center "
          >
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard