import React from 'react'

export default function Certificate() {
  return (
    <div className='px-28 pt-40 mt-5 border-b-2 border-gray-200 text-gray-500' id='certificate'>
        <h2 className='text-3xl text-center mb-10'>Certificate</h2>
        <p className='text-xl mt-6'>Web Dev Pro: HTML + CSS, Javascript, and React</p>

        <p className='text-xl mt-4 leading-relaxed'>In this course, I learned how to build modern, responsive websites using HTML, CSS, and JavaScript. I created interactive layouts, styled web pages, and made sure they looked good on all devices. I also worked with tools like React and Git, and integrated external data using APIs. This course gave me the skills to create clean, user-friendly web experiences.</p>
        
        <div className='w-full flex justify-center my-9'>
            <a href='/assets/Joeffrey Pilar_WDPBatch2_Certificate_of_Completion_2024.pdf (1) (1).png'
            target='_blank'
               className='border-2 rounded-lg text-xl border-gray-300 py-3 px-7 mt-5 mb-32
               hover:bg-gray-100 transition-colors duration-300 ease-in'>
                View Certificate
            </a>
        </div>
        
    </div>
  )
}
