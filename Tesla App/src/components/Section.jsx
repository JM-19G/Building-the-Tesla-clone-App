import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

function Section({ id, name, description, images, price, interior, exterior, openModal }) {
    const navigate = useNavigate()
  return (
    <motion.div
      id={id}
      className="h-screen w-full bg-cover bg-center relative flex flex-col justify-between items-center text-center snap-start"
      style={{
      backgroundImage: `url(${images?.[0]})`
       }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
     >
      {/*  FULL SCREEN OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

      {/*  CONTENT ) */}
      <div className="relative z-10 pt-32 text-center text-white">
        <h1 className="text-5xl font-medium tracking-wide hover:scale-110 transition duration-500">
         {name}
        </h1>
       <p className="text-sm mt-2 opacity-80">{description}</p>
      </div>

     
        <div className="relative z-10 mb-10 flex gap-4">
          <button className="bg-black/70 backdrop-blur-md text-white px-8 py-2 rounded-full text-sm hover:bg-black transition duration-300">
           Custom Order
          </button>

          <button
            onClick={() => navigate(`/${id}`)}
            className="bg-white/80 backdrop-blur-md text-black px-8 py-2 rounded-full text-sm hover:bg-white transition duration-300"
           >
           View Details
          </button>

        </div>

    </motion.div>
  )
}

export default Section

