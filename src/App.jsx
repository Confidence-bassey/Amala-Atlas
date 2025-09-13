import './App.css'
import AddSpotForm from './components/AddSpotForm'
import Newsletter from './components/CTASection'
import Footer from './components/Footer'
import HeroMapSection from './components/HeroSection'
import InfoCards from './components/HowItWorks'
import MapPreview from './components/MapPreview'
import StatsCards from './components/StatsCard'

function App() {

  return (
   <>
    <HeroMapSection />
    <InfoCards />
    <MapPreview />
    <StatsCards />
    <Newsletter />
    <AddSpotForm/>
    <HowItWorks/>
    <Footer />
   </>
  )
}

export default App



