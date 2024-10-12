import React from 'react'
import { IoLogoGithub } from "react-icons/io5";

export default function Project() {
  return (
    <div className='px-28 pt-40 pb-10 mt-5 mb-20 text-gray-500' id='project'>
      <h2 className='text-3xl text-center mb-10'>Project</h2>

      <div className='flex flex-wrap justify-evenly gap-10'>
      {/* news */}
      
        <div className='border-2 border-gray-300 flex flex-col gap-4'>
            <img className='w-[450px] h-[250px] border-b-[5px] border-deepBlue' src="assets/alertify-screen-shot.png" alt="News Web App" />
            <div className='px-12 w-[450px] h-min-fit'>
              <p className='text-center text-2xl'>Alertify PH</p>

              <p className='text-[15px] leading-relaxed mt-1'>A web application that fetches and displays the latest news articles from various sources. It was built using HTML, CSS, and JavaScipt (Async/Await).</p>
              
              <a href='https://github.com/jfreepilar/js-api-app/tree/js-api-app' target='_blank'>
                <div className='flex justify-between items-center my-6 mx-auto w-[120px] border-2 border-gray-300 group cursor-pointer'>
                  <IoLogoGithub  className='text-4xl p-2 bg-gray-200 group-hover:bg-gray-300  transition-colors duration-300 ease-in'/>
                  <p className='text-[16px] mr-4'>Github</p>
                </div>
              </a>
            </div>
        </div>

        <div className='border-2 border-gray-300 flex flex-col gap-4'>
            <img className='w-[450px] h-[250px] border-b-[5px] border-orange-400' src="assets/stomp-screen-shot.png" alt="E-commerce Web App" />
            <div className='px-12 w-[450px] h-min-fit'>
              <p className='text-center text-2xl'>Stomp</p>

              <p className='text-[15px] leading-relaxed mt-1'>
                Key functionalities include adding products to the cart and viewing detailed product information. It was built using React (JSX, React Hooks, and React Router)
              </p>
              
              <a href='https://github.com/jfreepilar/js-api-app/tree/js-api-app' target='_blank'>
                <div className='flex justify-between items-center my-6 mx-auto w-[120px] border-2 border-gray-300 group cursor-pointer'>
                  <IoLogoGithub  className='text-4xl p-2 bg-gray-200 group-hover:bg-gray-300  transition-colors duration-300 ease-in'/>
                  <p className='text-[16px] mr-4'>Github</p>
                </div>
              </a>
            </div>
        </div>

      </div>

      <div className='border-2 w-[450px] mx-auto mt-8  border-gray-300 flex flex-col gap-4'>
        <img className='w-[450px] h-[250px] border-b-[5px] border-tomato' src="assets/recipe-screen-shot.png" alt="Recipe Web App" />
        <div className='px-12 h-min-fit'>
          <p className='text-center text-2xl'>Savory Spoon</p>

          <p className='text-[15px] leading-relaxed mt-1'>
            Key functionalities include searching for specific recipes, displaying recipes by categories, and toggling the visibility of ingredients and instructions. It was built using React (JSX, React Hooks, React Router, and useReducer)
          </p>
          
          <a href='https://github.com/jfreepilar/js-api-app/tree/js-api-app' target='_blank'>
            <div className='flex justify-between items-center my-6 mx-auto w-[120px] border-2 border-gray-300 group cursor-pointer'>
              <IoLogoGithub  className='text-4xl p-2 bg-gray-200 group-hover:bg-gray-300  transition-colors duration-300 ease-in'/>
              <p className='text-[16px] mr-4'>Github</p>
            </div>
          </a>
        </div>
    </div>


    </div>
  )
}
