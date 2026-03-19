import { useState } from "react"
import { motion } from "framer-motion"

function CarModal({ car, closeModal }) {
  const [index, setIndex] = useState(0)

  if (!car) return null

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % car.images.length)
  }

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? car.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="fixed inset-0 bg-black z-50 text-white overflow-y-scroll">

      {/* CLOSE BUTTON */}
      <button
        onClick={closeModal}
        className="fixed top-4 right-6 text-2xl z-50"
      >
        ✕
      </button>

      {/* IMAGE SECTION */}
      <div className="relative h-[60vh]">
        <motion.img
          key={index}
          src={car.images[index]}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex justify-center gap-2 mt-2">
          {car.images.map((img, i) => (
          <img
           key={i}
           src={img}
           onClick={() => setIndex(i)}
           className={`w-16 h-10 object-cover rounded cursor-pointer border ${
            index === i ? "border-white" : "border-transparent"
           }`}
          />
         ))}
        </div>

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 text-3xl hover:scale-125 transition"
         >
         ◀
        </button>

        <button
         onClick={nextImage}
         className="absolute right-4 top-1/2 text-3xl hover:scale-125 transition"
         >
         ▶
        </button>
      </div>

      {/* DETAILS SECTION */}
      <motion.div
        className="p-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold">{car.name}</h2>
        <p className="mt-2 text-lg">💰 {car.price}</p>

        <p className="mt-4">🪑 {car.interior}</p>
        <p className="mt-2">🚗 {car.exterior}</p>

        {/* BUTTONS */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-full transition transform hover:scale-105">
           Order Now
          </button>

          <button className="border border-white px-6 py-2 rounded-full transition transform hover:scale-105">
           Test Drive
          </button>
        </div>

        {/* INTERIOR IMAGES */}
        <div className="mt-8">
          <h3 className="text-xl mb-2">Interior</h3>
          <div className="flex gap-3 overflow-x-auto">
            {car.interiorImages?.map((img, i) => (
              <img key={i} src={img} className="w-32 h-20 object-cover rounded" />
            ))}
          </div>
        </div>

        {/* EXTERIOR IMAGES */}
        <div className="mt-8">
          <h3 className="text-xl mb-2">Exterior</h3>
          <div className="flex gap-3 overflow-x-auto">
            {car.exteriorImages?.map((img, i) => (
              <img key={i} src={img} className="w-32 h-20 object-cover rounded" />
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default CarModal