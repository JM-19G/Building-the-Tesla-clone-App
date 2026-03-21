import { useParams } from "react-router-dom"
import cars from "../data/cars"

function CarPage() {
  const { id } = useParams()

  const car = cars.find((c) => c.id === id)

  if (!car) return <p>Car not found</p>

  return (
    <div className="bg-black text-white min-h-screen p-6">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-4">{car.name}</h1>

      {/* MAIN IMAGE */}
      <img
        src={car.images[0]}
        className="w-full h-[60vh] object-cover rounded-lg"
      />

      {/* DETAILS */}
      <div className="mt-6 space-y-3">
        <p className="text-lg">💰 {car.price}</p>
        <p>🪑 {car.interior}</p>
        <p>🚗 {car.exterior}</p>
      </div>

      {/* BUTTONS */}
      <div className="mt-6 flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-full">
          Custom Order
        </button>

        <button className="border border-white px-6 py-2 rounded-full">
          Existing Inventory
        </button>
      </div>

      {/* INTERIOR IMAGES */}
      <div className="mt-10">
        <h2 className="text-2xl mb-3">Interior</h2>

        <div className="flex gap-4 overflow-x-auto">
          {car.interiorImages?.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-64 h-40 object-cover rounded"
            />
          ))}
        </div>
      </div>

      {/* EXTERIOR IMAGES */}
      <div className="mt-10">
        <h2 className="text-2xl mb-3">Exterior</h2>

        <div className="flex gap-4 overflow-x-auto">
          {car.exteriorImages?.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-64 h-40 object-cover rounded"
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default CarPage