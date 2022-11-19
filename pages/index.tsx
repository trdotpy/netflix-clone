import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import { modalState, movieState } from '../atoms/modalAtom'
import { Movie } from '../types'
import requests from '../utils/requests'
import Modal from '../components/Modal/Modal'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}

const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  const showModal = useRecoilValue(modalState)

  return (
    <main
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[120vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}
    >
      <Head>
        <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar />
        <section className="relative pl-8">
          <Banner netflixOriginals={netflixOriginals} />
          <div className="md:space-y-44">
            <Carousel title="Trending" movies={trendingNow} />
            <Carousel title="Top Rated" movies={topRated} />
            <Carousel title="Action" movies={actionMovies} />
            <Carousel title="Romance" movies={romanceMovies} />
            <Carousel title="Comedies" movies={comedyMovies} />
            <Carousel title="Documentaries" movies={documentaries} />
            <Carousel title="Horror" movies={horrorMovies} />
          </div>
        </section>
        {showModal && <Modal />}
      </div>
    </main>
  )
}

export default Home
