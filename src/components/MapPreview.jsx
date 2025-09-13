import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
};

const center = {
  lat: 6.5244, 
  lng: 3.3792,
};

const spots = [
  {
    id: 1,
    name: "Mama Tolu Amala",
    position: { lat: 6.5244, lng: 3.3792 },
    description: "Authentic Amala spot in Lagos.",
  },
  {
    id: 2,
    name: "London Amala Joint",
    position: { lat: 51.5074, lng: -0.1278 },
    description: "A taste of home in London.",
  },
  {
    id: 3,
    name: "New York Amala Kitchen",
    position: { lat: 40.7128, lng: -74.006 },
    description: "Amala in NYC!",
  },
];

function MapPreview() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selectedSpot, setSelectedSpot] = useState(null);

  if (!isLoaded) return <p className="text-center">Loading Map...</p>;

  return (
    <div className="my-8">
      {/* <h2 className="text-2xl font-bold text-center mb-4">Explore Verified Amala Spots</h2> */}
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
        {spots.map((spot) => (
          <Marker
            key={spot.id}
            position={spot.position}
            onClick={() => setSelectedSpot(spot)}
          />
        ))}

        {selectedSpot && (
          <InfoWindow
            position={selectedSpot.position}
            onCloseClick={() => setSelectedSpot(null)}
          >
            <div className="p-2">
              <h3 className="font-bold">{selectedSpot.name}</h3>
              <p className="text-sm">{selectedSpot.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <p className="text-center text-sm mt-2 text-gray-600">Verified by the community</p>
    </div>
  );
}

export default MapPreview;
