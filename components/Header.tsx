import { useEffect, useState } from 'react'

import Image from 'next/image'
import BasicMenu from './BasicMenu'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      {/* Left */}

      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="https://res.cloudinary.com/drij60fru/image/upload/v1665355945/nflx-logo_seqb3j.png"
          // src={logo}
          alt="logo"
          height={100}
          width={100}
          className="object-contain cursor-pointer"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-[.4s]  hover:text-white">
            Home
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            TV Shows
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            Movies & Films
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            New & Popular
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline"></p>
        <BellIcon className="h-6 w-6" />
        <BasicMenu />
      </div>
    </header>
  )
}

export default Header
