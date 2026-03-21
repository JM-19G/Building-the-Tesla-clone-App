import { useState } from "react"
import { motion } from "framer-motion"

function CarModal({ car, closeModal }) {
  const [index, setIndex] = useState(0)

  if (!car) return null
  console.log("CAR DATA:", car)
  const nextImage = () => {
    setIndex((prev) => (prev + 1) % car.images.length)
  }

  const prevImage = () => {
    setIndex((prev) =>
      prev === 0 ? car.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="fixed inset-0 bg-black/95 z-50 text-white overflow-y-auto">

      {/* CLOSE BUTTON */}
      <button
        onClick={closeModal}
        className="fixed top-4 right-6 text-3xl z-50 hover:scale-110 transition"
      >
        ✕
      </button>

      {/* IMAGE SECTION */}
      <div className="relative h-[60vh] flex items-center justify-center">

        <motion.img
          key={index}
          src={car.images[index]}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* LEFT BUTTON */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl hover:scale-125 transition"
        >
          ◀
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl hover:scale-125 transition"
        >
          ▶
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex justify-center gap-3 mt-4 px-4 overflow-x-auto">
        {car.images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setIndex(i)}
            className={`w-20 h-12 object-cover rounded cursor-pointer border transition ${
              index === i ? "border-white scale-105" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* DETAILS SECTION */}
      <motion.div
        className="p-6 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold">{car.name}</h2>

        <p className="mt-2 text-lg">💰 {car.price}</p>

        <p className="mt-4 opacity-80">🪑 {car.interior}</p>
        <p className="mt-2 opacity-80">🚗 {car.exterior}</p>

        {/* BUTTONS */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-black px-6 py-2 rounded-full transition transform hover:scale-105">
            Order Now
          </button>

          <button className="border border-white px-6 py-2 rounded-full transition transform hover:scale-105">
            Test Drive
          </button>
        </div>

        {/* INTERIOR IMAGES */}
        <div className="mt-10 text-left">
          <h3 className="text-xl mb-3">Interior</h3>
          <div className="flex gap-3 overflow-x-auto">

           {car.interiorImages && car.interiorImages.length > 0 ? (
           car.interiorImages.map((img, i) => (
           <img
            key={i}
            src={img}
            className="w-40 h-24 object-cover rounded border"
           />
           ))
           ) : (
            <p className="text-red-400">No Interior Images Found</p>
           )}
          </div>
        </div>

        {/* EXTERIOR IMAGES */}
        <div className="mt-10 text-left">
          <h3 className="text-xl mb-3">Exterior</h3>
          <div className="flex gap-3 overflow-x-auto">
            {car.exteriorImages?.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-40 h-24 object-cover rounded hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default CarModal