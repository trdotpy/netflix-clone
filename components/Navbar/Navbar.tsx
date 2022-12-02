import Image from 'next/image'
import ProfileMenu from './ProfileMenu'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-transparent">
      <div className="flex justify-between">
        <Image
          src="https://res.cloudinary.com/drij60fru/image/upload/v1665355945/nflx-logo_seqb3j.png"
          alt="netflix-logo"
          height={125}
          width={125}
          className="cursor-pointer object-contain"
        />
      </div>

      <nav>
        <ul className="hidden md:flex md:space-x-8">
          <Link href="/">
            <li className="text-md cursor-pointer text-[#e5e5e5] transition duration-200 text-shadow-md hover:brightness-125">
              <p>Home</p>
            </li>
          </Link>
          <Link href="/">
            <li className="text-md cursor-pointer text-[#e5e5e5] transition duration-200 text-shadow-md hover:brightness-125">
              <p>Movies & Film</p>
            </li>
          </Link>
          <Link href="/">
            <li className="text-md cursor-pointer text-[#e5e5e5] transition duration-200 text-shadow-md hover:brightness-125">
              <p>TV Shows</p>
            </li>
          </Link>

          <Link href="/">
            <li className="text-md cursor-pointer text-[#e5e5e5] transition duration-200 text-shadow-md hover:brightness-125">
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
