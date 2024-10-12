import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div className='mt-5 px-28 pt-40 border-b-2 border-gray-200 flex flex-col items-center text-gray-500' id='skills'>

        <h2 className='text-3xl text-center mb-5'>Skills</h2>

        <div className='flex justify-around mb-32 w-full'>
          <div className='flex flex-col items-center'>
            <div className='border-2 border-gray-300 rounded-full h-52 w-52 flex justify-center items-center'>
              <div className='border-2 border-gray-300 rounded-full h-44 w-44 flex justify-center items-center'>
                <SiHtml5 className='text-6xl text-orange-400' />
              </div>
            </div>
            <h3 className='text-xl mt-3'>HTML</h3>
          </div>

          <div className='flex flex-col items-center'>
            <div className='border-2 border-gray-300 rounded-full h-52 w-52 flex justify-center items-center'>
              <div className='border-2 border-gray-300 rounded-full h-44 w-44 flex justify-center items-center'>
                <FaCss3 className='text-6xl text-blue-400' />
              </div>
            </div>
            <h3 className='text-xl mt-3'>CSS</h3>
          </div>

          <div className='flex flex-col items-center'>
            <div className='border-2 border-gray-300 rounded-full h-52 w-52 flex justify-center items-center'>
              <div className='border-2 border-gray-300 rounded-full h-44 w-44 flex justify-center items-center'>
                <RiTailwindCssFill className='text-6xl text-teal-400' />
              </div>
            </div>
            <h3 className='text-xl mt-3'>Tailwind</h3>
          </div>
        </div>

        <div className='flex mt-[-100px] mb-32 w-2/4'>
          <div className='flex flex-col items-center'>
              <div className='border-2 border-gray-300 rounded-full h-52 w-52 flex justify-center items-center'>
                <div className='border-2 border-gray-300 rounded-full h-44 w-44 flex justify-center items-center'>
                  <SiJavascript className='text-6xl text-yellow-400 bg-black' />
                </div>
              </div>
              <h3 className='text-xl mt-3'>JavaScipt</h3>
            </div>

            <div className='flex flex-col items-center ml-auto'>
              <div className='border-2 border-gray-300 rounded-full h-52 w-52 flex justify-center items-center'>
                <div className='border-2 border-gray-300 rounded-full h-44 w-44 flex justify-center items-center'>
                  <FaReact className='text-6xl text-sky-400'/>
                </div>
              </div>
              <h3 className='text-xl mt-3'>React</h3>
            </div>
        </div>

    </div>
  )
}
