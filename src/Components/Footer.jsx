import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";

export default function Footer() {

  const icons = [
    {icon: <FaFacebookSquare />, link: 'https://www.facebook.com/pilarjoeffrey'},
    {icon: <BsInstagram />, link: 'https://www.instagram.com/joeffreyplr/'},
    {icon: <BsLinkedin /> , link:'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'},
    {icon: <IoLogoGithub />, link: 'https://github.com/jfreepilar'}
    ];


  return (
    <>
        <div className='h-[250px] text-white flex flex-col items-center'>
            <h2 className='text-3xl pt-7 text-center'>Contact me</h2>
            <div className='text-xl mt-4 flex'>
                <p className='text-start ml-[78px]'>Phone: <span className='ml-3'>0969 565 0962</span> </p>
                <p className='text-start ml-[88px]'>Email: <span className='ml-3'>pilarjoeffrey@gmail.com</span></p>
            </div>

        <div className='flex mt-4 gap-10'>


          {icons.map((item, index) => (
          <a href={item.link} key={index} target="_blank" rel="noopener noreferrer"
             className='text-2xl border-[1px] border-gray-300 rounded-full p-3
                        hover:cursor-pointer hover:bg-white hover:bg-opacity-10'>
            {item.icon}
          </a>))}

        </div>
        
        <div className='mt-10 flex'>
          <p className='text-[15px] mt-[5px] mr-1'><LuCopyright /></p>
          <p>Joeffrey Pilar</p> 
        </div>

        </div>


    </>
  )
}
