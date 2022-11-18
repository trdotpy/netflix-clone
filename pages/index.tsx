import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'
import Row from '../components/Row/Row'
import { modalState, movieState } from '../atoms/modalAtom'
import { Movie } from '../types'
import requests from '../utilities/requests'
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
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}
    >
      <Head>
        <title>Netflix - Watch TV Shows Online, Watch Movies Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <div className="relative pl-8 lg:space-y-0">
          <Banner netflixOriginals={netflixOriginals} />
          <div className="md:space-y-52">
            <Row title="Trending" movies={trendingNow} />
            <Row title="Romance" movies={romanceMovies} />
            <Row title="Comedies" movies={comedyMovies} />
            <Row title="Documentaries" movies={documentaries} />
            <Row title="Top Rated" movies={topRated} />
            <Row title="Action" movies={actionMovies} />
            <Row title="Horror" movies={horrorMovies} />
          </div>
        </div>
        {showModal && <Modal />}
      </>
    </div>
  )
}

export default Home

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
