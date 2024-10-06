import React from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Project from './Project'

export default function Main() {
  return (
    <div className='w-[90%] bg-white text-gray-500 rounded-t-md'>
        <NavBar />
        <AboutMe/>
        <Skills />
        <Project />
    </div>
  )
}
