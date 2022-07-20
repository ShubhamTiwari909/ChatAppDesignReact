import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsFillChatFill } from 'react-icons/bs'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
function RightSide() {
  return (
    <div className="p-4 bg-gray-100" style={{ height: "100vh" }}>
      {/* search bar */}
      <div className="my-2 py-2">
        <div className="relative flex items-center text-gray-400">
          <FiSearch className="w-5 h-5 absolute ml-3" size="0.8rem" />
          <input type="text" placeholder={`Search People`}
            className="rounded-2xl pl-10 py-1.5 w-full" />
        </div>
      </div>

      {/* user dp and name */}
      <div className="grid place-items-center my-3">
        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbjB0GeD9Ew5fDkmqNxlcs67FTF8elFIL6_KC7J4bwZmfeE9BgOA_5Lfk807xjae6hSI&usqp=CAU`}
          alt="profile" className="rounded-full w-28 h-28 object-cover" />
        <h1 className="text-2xl mt-1">Elizabeth Olsen</h1>
        <p className="text-lg text-gray-700">Junior Developer</p>
      </div>

      {/* chat and camera icons */}
      <div className="flex justify-between mx-10 my-4">
        <div>
          <div className="bg-indigo-200 p-3 rounded-full">
            <BsFillChatFill color="#3949ab" size="1.5rem" />
          </div>
          <p className="text-gray-700 text-center text-sm mt-1">Chat</p>
        </div>
        <div className="w-0.5 bg-gray-300">

        </div>
        <div>
          <div className="bg-indigo-200 p-3 rounded-full">
            <BsFillCameraVideoFill color="#3949ab" size="1.5rem" />
          </div>
          <p className="text-gray-700 text-center text-sm mt-1">Video Call</p>
        </div>
      </div>

      {/* view friends and add to favourites */}
      <div className="my-3">
        <div className="flex space-x-3">
          <AiOutlineUser className="mt-1" size="1rem" color="grey" />
          <p className="text-gray-700 text-sm ">View Friends</p>
        </div>
        <div className="flex space-x-3 my-3">
          <AiOutlineHeart className="mt-1" size="1rem"color="grey" />
          <p className="text-gray-700 text-sm ">Add to Favorites</p>
        </div>
      </div>

      {/* Attachments */}
      <div>
        <h1 className="my-3 text-sm text-gray-700 font-bold">Attachments</h1>
        <div className="flex justify-between">
          <div className="bg-indigo-200 rounded-md w-14 h-16 grid place-content-center">
            <h1 className="text-indigo-400 text-xs font-bold">PDF</h1>
          </div>
          <div className="bg-indigo-200 rounded-md w-14 h-16 grid place-content-center">
            <h1 className="text-indigo-400 text-xs font-bold">Video</h1>
          </div>
          <div className="bg-indigo-200 rounded-md w-14 h-16 grid place-content-center">
            <h1 className="text-indigo-400 text-xs font-bold">MP3</h1>
          </div>
          <div className="bg-indigo-200 rounded-md w-14 h-16 grid place-content-center">
            <h1 className="text-indigo-400 text-xs font-bold">image</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide