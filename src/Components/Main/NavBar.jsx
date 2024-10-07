import {useEffect, useState} from 'react'

export default function NavBar() {
    const navItems = ['About me', 'Certification', 'Skills', 'Projects']
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 590) {
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
        <nav className={`${isFixed ? 'fixed top-0 w-[90%] h-16' 
                        : 'relative'}
                      bg-gray-100 rounded-t-md`}>
            <ul className={`${isFixed ? 'gap-24 py-2 transition-g duration-300 ease-out': 'gap-36 py-5 transition-g duration-300 ease-out' } flex  justify-center `}>
                {navItems.map((item, index) => 
                    <li className={`${isFixed ? 'text-xl' : 'text-2xl'} p-2 
                                   hover:cursor-pointer hover:bg-white hover:rounded`} key={index}>{item}</li>
                )}
            </ul>
        </nav>
    </>
  )
}
