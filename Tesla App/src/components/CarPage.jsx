import { useParams } from "react-router-dom"
import cars from "../data/cars"

function CarPage() {
  const { id } = useParams()

  const car = cars.find((c) => c.id === id)

  if (!car) return <div>Car not found</div>

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold mb-4">{car.name}</h1>

      <img
        src={car.images[0]}
        className="w-full max-h-[400px] object-cover rounded"
      />

      <p className="mt-4">💰 {car.price}</p>
      <p className="mt-2">🪑 {car.interior}</p>
      <p className="mt-2">🚗 {car.exterior}</p>

    </div>
  )
}

export default CarPage