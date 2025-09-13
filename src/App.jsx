import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddSpotForm from './components/AddSpotForm'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div>
      <AddSpotForm/>
      <HowItWorks/>
    </div>
    
  )
}

export default App
