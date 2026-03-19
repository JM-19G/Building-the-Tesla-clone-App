import { motion } from "framer-motion"

function Section({ id, name, description, images, price, interior, exterior, openModal }) {
  return (
    <motion.div
      id={id}
      className="h-screen bg-cover bg-center relative flex flex-col justify-between items-center text-center snap-start"
      style={{
        backgroundImage: `url(${images[0]}?auto=format&fit=crop&w=1920&q=80)`
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/*  FULL SCREEN OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/*  CONTENT ) */}
      <div className="relative z-10 pt-24 text-center text-white">
       <h1 className="text-5xl font-medium tracking-wide">{name}</h1>
       <p className="text-sm mt-2 opacity-80">{description}</p>
      </div>

      {/* <div className="relative z-10 mb-10 flex gap-4">
        <button
          onClick={() => alert(`${name} Order Page Coming Soon 🚀`)}
          className="bg-black/80 hover:bg-black text-white px-6 py-2 rounded-full transition duration-300"
        >
          Custom Order
        </button> */}
        <div className="relative z-10 mb-10 flex gap-4">
          <button className="bg-black/70 backdrop-blur-md text-white px-8 py-2 rounded-full text-sm transition hover:bg-black">
           Custom Order
          </button>

        <button
          onClick={openModal}
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full transition duration-300"
        >
          View Details
        </button>

        {/* <button
          onClick={() => alert(`${name} Inventory Coming Soon 🚗`)}
          className="bg-black/80 hover:bg-black text-white px-6 py-2 rounded-full transition duration-300"
        >
          Existing Inventory
        </button>
      </div> */}
      <button className="bg-white/80 backdrop-blur-md text-black px-8 py-2 rounded-full text-sm transition hover:bg-white">
       Existing Inventory
      </button>
    </div>

    </motion.div>
  )
}

export default Section