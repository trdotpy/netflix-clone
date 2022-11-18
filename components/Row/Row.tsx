// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { Movie } from '../../types'
import Thumbnail from './Thumbnail'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

interface Props {
  title: string
  movies: Movie[]
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="h-52 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-2xl font-semibold text-[#e5e5e5] transition duration-200 text-shadow-xl hover:text-white md:text-4xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ArrowBackIosIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        <div
          className="flex items-center space-x-2 overflow-x-scroll scrollbar-hide md:space-x-4 md:p-2"
          ref={rowRef}
        >
          {movies &&
            movies?.map((movie) => <Thumbnail key={movie.id} movie={movie} />)}
        </div>
        <ArrowForwardIosIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
