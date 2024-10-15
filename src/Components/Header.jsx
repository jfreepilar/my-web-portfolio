import React from 'react'

const buttons = [
  {content: 'View Resume', link: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'}, 
  {content: 'Say Hello', link: 'mailto:pilarjoeffrey@gmail.com'}
]

export default function Header() {
  return (
    <div className='text-white flex flex-col items-center mt-20 mb-14'>
      <img src='/assets/web-portfolio-photo.png' alt='Profile Picture'
      className='mb-12 border-[3px] border-white h-[300px] w-[300px] rounded-full'/>
      <h1 className='text-6xl mb-4'>Joeffrey Pilar</h1>
      <h2 className='text-4xl mb-4'>Front End Web Developer</h2>
      <p>selling point here ...</p>

      <div className='flex justify-evenly w-full'>
        {buttons.map((item, index) => (
          <a href={item.link} key={index} target='_blank' rel='noopener noreferrer'
            className='border-2 rounded-lg text-xl border-gray-300 py-2 px-5 mt-3
                      hover:bg-gray-100 transition-colors duration-300 ease-in hover:bg-opacity-10'>
            {item.content}
          </a>
        ))}
      </div>


    </div>
  )
}
