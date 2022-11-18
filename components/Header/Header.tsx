import Image from 'next/image'
import ProfileAvatar from './ProfileAvatar'
import HomeIcon from '@mui/icons-material/Home'
import TheatersIcon from '@mui/icons-material/Theaters'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Header() {
  return (
    <header className="bg-transparent">
      <div className="flex justify-center">
        <Image
          src="https://res.cloudinary.com/drij60fru/image/upload/v1665355945/nflx-logo_seqb3j.png"
          alt="netflix-logo"
          height={150}
          width={150}
          className="cursor-pointer object-contain"
        />
      </div>

      <nav>
        <ul className="hidden space-x-12 md:flex">
          <li className="cursor-pointer text-lg text-[#e5e5e5] transition duration-200  text-shadow-md hover:brightness-125">
            <HomeIcon />
          </li>

          <li className="cursor-pointer text-lg text-[#e5e5e5] transition duration-200 text-shadow-md hover:text-white">
            <TheatersIcon />
          </li>
          <li className="cursor-pointer text-lg text-[#e5e5e5] transition duration-200 text-shadow-md hover:text-white">
            <LiveTvIcon />
          </li>
          <li className="cursor-pointer text-lg text-[#e5e5e5] transition duration-200 text-shadow-md hover:text-white">
            <FavoriteIcon />
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <ProfileAvatar />
      </div>
    </header>
  )
}

export default Header
