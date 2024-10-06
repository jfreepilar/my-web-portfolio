import React from 'react'

export default function NavBar() {
    const navItems = ['About me', 'Certification', 'Skills', 'Projects']

  return (
    <>
        <nav className='bg-gray-100 rounded-t-md'>
            <ul className='flex gap-36 justify-center py-5'>
                {navItems.map((item, index) => 
                    <li className='text-2xl p-2 
                                   hover:cursor-pointer hover:bg-white hover:rounded' key={index}>{item}</li>
                )}
            </ul>
        </nav>
    </>
  )
}
