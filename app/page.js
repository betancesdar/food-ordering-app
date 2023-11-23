import AboutUs from '@/components/about/AboutUs'
import Footer from '@/components/footer/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeaders from '@/components/layout/SectionsHeaders'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <AboutUs />
      <Footer />
    </>
  )
}
