import Image from 'next/image'
import ProfileMenu from './ProfileMenu'
import HomeIcon from '@mui/icons-material/Home'
import TheatersIcon from '@mui/icons-material/Theaters'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import TvIcon from '@mui/icons-material/Tv'
import ListIcon from '@mui/icons-material/List'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'


export default function Navbar() {
  return (
    <header className="bg-transparent">
      <div className="flex justify-center">
        <Image
          src="https://res.cloudinary.com/drij60fru/image/upload/v1665355945/nflx-logo_seqb3j.png"
          alt="netflix-logo"
          height={125}
          width={125}
          className="cursor-pointer object-contain"
        />
      </div>

      <nav>
        <ul className="hidden md:space-x-12 md:flex">
          <Link href="/">
            <li className="text-md cursor-pointer text-[#e5e5e5] transition duration-200  text-shadow-lg hover:brightness-125">
              <p>Home</p>
            </li>
          </Link>

          <Link href="/">
            <li className="text-md cursor-pointer text-[#e5e5e5] transition duration-200 text-shadow-lg hover:brightness-125">
              <p>TV Shows</p>
            </li>
          </Link>
          <Link href="/">
            <li className="text-md cursor-pointer text-[#e5e5e5] transition duration-200 text-shadow-lg hover:brightness-125">
              <p>TV Shows</p>
            </li>
          </Link>
          <Link href="/">
            <li className="text-md cursor-pointer text-[#e5e5e5] transition duration-200 text-shadow-lg hover:brightness-125">
              <p>New & Popular</p>
            </li>
          </Link>
        </ul>
      </nav>

      <div className="flex items-center gap-x-6">
        <SearchIcon className="h-6 w-6" />
        <ProfileMenu />
      </div>
    </header>
  )
}
