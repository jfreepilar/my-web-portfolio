import {useEffect, useState} from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TiThMenuOutline } from "react-icons/ti";

export default function NavBar() {
  const navItems = [
    { id: '#about-me', label: 'About Me' },
    { id: '#certificate', label: 'Certificate' },
    { id: '#skills', label: 'Skills' },
    { id: '#project', label: 'Project' },
  ];
  
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 640) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
        <nav className={`${isFixed ? 'fixed top-0 w-[80%] h-16 mb-5' 
                        : 'relative'}
                      bg-gray-100`}>
            <ul className={`${isFixed ? 'gap-24 py-2 transition-g duration-300 ease-out max-lg:gap-20'
                        : 'gap-36 py-5 transition-g duration-300 ease-out max-lg:gap-24' } 
                        flex justify-center max-md:transition-none`}>
                          
                {navItems.map((item, index) =>
                      <li className={`${isFixed ? 'text-xl max-lg:text-[18px]' : 'text-2xl max-lg:text-[22px]'} p-2 
                          hover:cursor-pointer hover:bg-white hover:rounded
                          max-lg:text-blue-500 max-md:hidden`} key={index}>
                        <AnchorLink href={`${item.id}`}>
                          {item.label}
                        </AnchorLink>
                    </li>
                    
                )}

                {/* Dropdown */}
                <div className='relative hidden max-md:block text-center group'>
                <TiThMenuOutline className='text-4xl hover:cursor-pointer mb-1'/>
                  <ul className='hidden group-hover:block absolute left-[-55px] mt-[-2px] bg-white rounded shadow-lg w-[150px]
                                transition-block duration-200 ease-in'>
                    {navItems.map((item, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100">
                        <AnchorLink href={`${item.id}`}>
                          {item.label}
                        </AnchorLink>
                      </li>
                    ))}
                  </ul>
                </div>

            </ul>
        </nav>
    </>
  )
}

