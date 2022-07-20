import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BsMic } from 'react-icons/bs'
import { FiPaperclip } from 'react-icons/fi'
import { AiOutlineCamera } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import './style.css'
function MiddleSide() {
  return (
    <div className="p-4" style={{ height: "100vh" }}>
      {/* header */}
      <div className="flex justify-between mb-3">
        {/* user profile ans name */}
        <div className="flex space-x-3">
          <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbjB0GeD9Ew5fDkmqNxlcs67FTF8elFIL6_KC7J4bwZmfeE9BgOA_5Lfk807xjae6hSI&usqp=CAU`}
            alt="profile" className="rounded-full w-10 h-9 object-cover" />
          <h1 className="text-md text-slate-700 font-sans mt-2 flex space-x-2">
            <p>Elizabeth Olsen </p>
            <p className="w-1 h-1 p-1 bg-green-500 rounded-full mt-2"></p>
          </h1>
        </div>
        {/* icons on the right */}
        <div className="flex space-x-2 mt-3">
          <FiSearch size="1.1rem" color="gray" />
          <AiOutlineHeart size="1.1rem" color="gray" />
          <AiOutlineBell size="1.1rem" color="gray" />
        </div>
      </div>
      <hr className="bg-gray-500" />

      {/* chat window */}
      <div className="chatWindow overflow-auto p-1" style={{ height: "70vh" }}>
        <div className="mt-3" >
          <hr className="bg-gray-500" />
          <p className="text-gray-400 text-center text-xs">Tomorrow</p>
          {/* sended message */}
          <div className="flex space-x-1 mt-3">
            <img src={`https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg`}
              alt="profile" className="rounded-full w-5 h-5 object-cover" />
            <h1 className="px-2 py-2.5 bg-gray-200 rounded-md text-slate-700 text-xs">That's Great</h1>
          </div>

          <div className="grid justify-content-end">
            {/* recieved message */}
            <div className="flex space-x-1 mt-3 w-72 justify-self-end">
              <h1 className="px-2 py-2.5 bg-indigo-600 rounded-md text-slate-100 text-xs">
                I am refer to the project structure and found some mistakes
              </h1>
              <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbjB0GeD9Ew5fDkmqNxlcs67FTF8elFIL6_KC7J4bwZmfeE9BgOA_5Lfk807xjae6hSI&usqp=CAU`}
                alt="profile" className="rounded-full w-5 h-5 object-cover" />
            </div>
            {/* recieved message */}
            <div className="flex space-x-1 mt-3 w-72 justify-self-end">
              <h1 className="px-2 py-2.5 bg-indigo-600 rounded-md text-slate-100 text-xs">
                There are some bugs in this project
              </h1>
              <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbjB0GeD9Ew5fDkmqNxlcs67FTF8elFIL6_KC7J4bwZmfeE9BgOA_5Lfk807xjae6hSI&usqp=CAU`}
                alt="profile" className="rounded-full w-5 h-5 object-cover" />
            </div>
          </div>

          {/* sended message*/}
          <div className="flex space-x-1 mt-3">
            <img src={`https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg`}
              alt="profile" className="rounded-full w-5 h-5 object-cover" />
            <h1 className="px-2 py-2.5 bg-gray-200 rounded-md text-slate-700 text-xs">I see that project</h1>
          </div>
          {/* sended message*/}
          <div className="flex space-x-1 mt-3">
            <img src={`https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg`}
              alt="profile" className="rounded-full w-5 h-5 object-cover" />
            <h1 className="px-2 py-2.5 bg-gray-200 rounded-md text-slate-700 text-xs">
              Yes there are many bugs in that project
            </h1>
          </div>

          <hr className="bg-gray-500" />
          <p className="text-gray-400 text-center text-xs">Today</p>

          {/* sended message*/}
          <div className="flex space-x-1 mt-3">
            <img src={`https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg`}
              alt="profile" className="rounded-full w-5 h-5 object-cover" />
            <h1 className="px-2 py-2.5 bg-gray-200 rounded-md text-slate-700 flex space-x-4">
              <button className="bg-indigo-600 px-2 py-1 rounded-md text-slate-100 text-xs">PDF</button>
              <p className="text-xs">Report.PDF</p>
              <span className="mt-1"><AiOutlineArrowDown color="blue" /></span>
            </h1>
          </div>
          <div className="grid justify-content-end">
            {/* recieved message */}
            <div className="flex space-x-1 mt-3 w-72 justify-self-end">
              <h1 className="px-2 py-2.5 bg-indigo-600 rounded-md text-slate-100 text-xs">
                Can you send me the report
              </h1>
              <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbjB0GeD9Ew5fDkmqNxlcs67FTF8elFIL6_KC7J4bwZmfeE9BgOA_5Lfk807xjae6hSI&usqp=CAU`}
                alt="profile" className="rounded-full w-5 h-5 object-cover" />
            </div>
            {/* recieved message */}
            <div className="flex space-x-1 mt-3 w-72 justify-self-end">
              <h1 className="px-2 py-2.5 bg-indigo-600 rounded-md text-slate-100 text-xs">
                Hello Sir, How are you?
              </h1>
              <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbjB0GeD9Ew5fDkmqNxlcs67FTF8elFIL6_KC7J4bwZmfeE9BgOA_5Lfk807xjae6hSI&usqp=CAU`}
                alt="profile" className="rounded-full w-5 h-5 object-cover" />
            </div>
          </div>
          {/* sended message*/}
          <div className="flex space-x-1 mt-3">
            <img src={`https://thumbs.dreamstime.com/b/profile-picture-smiling-caucasian-male-employee-close-up-young-businessman-show-leadership-qualities-headshot-portrait-happy-204044575.jpg`}
              alt="profile" className="rounded-full w-5 h-5 object-cover" />
            <h1 className="px-2 py-2.5 bg-gray-200 rounded-md text-slate-700 text-xs">
              Hello, i'm fine and You?
            </h1>
          </div>
        </div>
      </div>

      {/* message box and icons */}
      <div>
        <div className="my-4 py-2">
          <div className="relative flex items-center text-gray-500">
            <BsMic className="w-5 h-5 absolute ml-3" size="0.8rem" />
            <input type="text" placeholder={`Write Something`}
              className="rounded-2xl pl-10 py-1.5 w-full bg-gray-200" />
            <div className="flex space-x-2">
              <button>
                <FiPaperclip className="w-5 h-5 ml-2 mt-2" size="0.8rem" />
              </button>
              <button>
                <AiOutlineCamera className="w-5 h-5 ml-2 mt-2" size="0.8rem" />
              </button>
              <button>
                <BsEmojiSmile className="w-5 h-5 ml-2 mt-2" size="0.8rem" />
              </button>
              <button className="bg-indigo-600 p-2 rounded-full mt-1">
                <AiOutlineSend className="w-5 h-5" color="white" size="0.8rem" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiddleSide