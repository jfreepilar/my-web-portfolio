import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div className='mt-14 px-[80px]'>
        <SiHtml5 />
        <h3>HTML</h3>

        <FaCss3 />
        <h3>CSS</h3>

        <RiTailwindCssFill />
        <h3>Tailwind</h3>

        <SiJavascript />
        <h3>JavaScript</h3>

        <FaReact />
        <h3>React</h3>
    </div>
  )
}
