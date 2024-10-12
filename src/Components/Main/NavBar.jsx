import {useEffect, useState} from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

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
        <nav className={`${isFixed ? 'fixed top-0 w-[80%] h-16 bg-opacity-90 mb-5' 
                        : 'relative'}
                      bg-gray-100`}>
            <ul className={`${isFixed ? 'gap-24 py-2 transition-g duration-300 ease-out'
                        : 'gap-36 py-5 transition-g duration-300 ease-out' } 
                        flex justify-center`}>
                          
                {navItems.map((item, index) =>
                      <li className={`${isFixed ? 'text-xl' : 'text-2xl'} p-2 
                          hover:cursor-pointer hover:bg-white hover:rounded`} key={index}>
                        <AnchorLink href={`${item.id}`}>
                          {item.label}
                        </AnchorLink>
                    </li>
              )}
            </ul>
        </nav>
    </>
  )
}
