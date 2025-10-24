import React from 'react'
import SpottedRestaurant from '../components/SpottedRestaurant'

const ExploreSpot = () => {
  return (
    <>
    <div className="px-6 py-10 text-center">
      <h1 className="text-3xl font-bold text-[#0C2E8A]">Explore AmalaAtlas</h1>
      <p className="mt-4 text-gray-700">Here’s where you can explore amazing spots and features.</p>
    </div>

     <SpottedRestaurant />
    </>
   
  )
}

export default ExploreSpot