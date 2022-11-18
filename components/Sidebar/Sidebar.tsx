import React from 'react'
import ListIcon from '@mui/icons-material/List'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import TheatersIcon from '@mui/icons-material/Theaters'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

export default function Sidebar() {
  return (
    <nav className="fixed hidden min-h-screen w-12 items-center justify-center bg-black/5 text-gray-500 lg:flex">
      <ul className="flex flex-col gap-y-12">
        <li className=" cursor-pointer">
          <a href='/' className="text-white">
            <ListIcon />
          </a>
        </li>
        <li className="">
          <a href="/" className="text-white">
            <HomeIcon />
          </a>
        </li>
        <li className="">
          <a href="/" className="text-white">
            <SearchIcon />
          </a>
        </li>
        <li className="">
          <a href="/" className="text-white">
            <TheatersIcon />
          </a>
        </li>
        <li className="">
          <a href="/" className="text-white">
            <LiveTvIcon />
          </a>
        </li>
        <li className="">
          <a href="/" className="text-white">
            <FavoriteIcon />
          </a>
        </li>
        <li className="">
          <a href="/" className="text-white">
            <PersonIcon />
          </a>
        </li>
      </ul>
    </nav>
  )
}
