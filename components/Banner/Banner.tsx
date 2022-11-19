import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../../constants/movie'
import { Movie } from '../../types'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MovieIcon from '@mui/icons-material/Movie'
import InfoIcon from '@mui/icons-material/Info'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../../atoms/modalAtom'

type Props = {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  return (
    <div className="flex flex-col space-y-4 py-28  lg:h-[65vh] lg:justify-end lg:pb-28">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
      </div>

      <h1 className="max-w-3xl text-4xl font-bold text-shadow-xl md:text-6xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-h-xl text-md flex max-w-xl flex-wrap text-shadow-xl md:max-w-2xl md:text-lg lg:max-w-3xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button
          className="flex items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:py-2.5 md:px-8 md:text-lg"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          <MovieIcon className="text-black" />
          Play Trailer
        </button>

        <button
          className="flex items-center gap-x-2 rounded bg-[gray]/70 px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-lg"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          <InfoIcon className="h-5 w-5 md:h-8 md:w-8" /> <span>Info</span>
        </button>

        <button className="flex items-center gap-x-2 rounded bg-[gray]/70 px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-lg">
          <LibraryAddIcon className="h-5 w-5 md:h-8 md:w-8" />{' '}
          {/* <span className="hidden md:flex">Add To Watchlist</span> */}
        </button>
      </div>
    </div>
  )
}

export default Banner
