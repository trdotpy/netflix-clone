import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../../atoms/modalAtom'
import { Movie } from '../../types'

interface Props {
  movie: Movie
}

function Thumbnail({ movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer shadow-2xl transition duration-200 ease-out hover:rounded-lg hover:border-4 md:h-72 md:min-w-[220px] md:hover:scale-105`}
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="object-cover shadow-2xl"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
