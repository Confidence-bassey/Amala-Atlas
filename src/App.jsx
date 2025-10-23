import './App.css'
// import AddSpotForm from './components/AddSpotForm'
import Newsletter from './components/CTASection'
import Footer from './components/Footer'
import Navbar from './components/Header'
import HeroMapSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'

// import MapPreview from './components/MapPreview'
import StatsCards from './components/StatsCard'

function App() {

  return (
   <>
   <Navbar />
    <HeroMapSection />
    <HowItWorks/>
    {/* <InfoCards /> */}
    {/* <MapPreview /> */}
    <StatsCards />
    <Newsletter />
    {/* <AddSpotForm/> */}
    <Footer />
   </>
  )
}

export default App



