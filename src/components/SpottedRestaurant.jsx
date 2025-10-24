import { useState } from "react";
import SpottedRestaurantCard from "./SpottedRestaurantCard";

const restaurants = [
  { id: 1, name: "Mama’s Kitchen", location: "Lagos, Nigeria", rating: 4.8, reviews: 24 },
  { id: 2, name: "West African Delights", location: "London, UK", rating: 4.8, reviews: 24 },
  { id: 3, name: "Yoruba Kitchen", location: "Toronto, Canada", rating: 4.8, reviews: 24 },
  { id: 4, name: "Sahel Tastes", location: "Berlin, Germany", rating: 4.8, reviews: 24 },
];

export default function App() {
  const [selected, setSelected] = useState([1, 2]); 

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-10">
      <div className="space-y-4 w-full max-w-md">
        {restaurants.map((r) => (
          <SpottedRestaurantCard
            key={r.id}
            name={r.name}
            location={r.location}
            rating={r.rating}
            reviews={r.reviews}
            isSelected={selected.includes(r.id)}
            onClick={() => toggleSelect(r.id)}
          />
        ))}
      </div>
    </div>
  );
}
