import { motion } from "framer-motion"

function CarModal({ car, closeModal }) {
  if (!car) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      
      <motion.div
        className="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
        <p className="mb-2">💰 {car.price}</p>
        <p className="text-sm mb-2">🪑 {car.interior}</p>
        <p className="text-sm mb-4">🚗 {car.exterior}</p>

        <button
          onClick={closeModal}
          className="bg-black text-white px-6 py-2 rounded-full"
        >
          Close
        </button>
      </motion.div>

    </div>
  )
}

export default CarModal