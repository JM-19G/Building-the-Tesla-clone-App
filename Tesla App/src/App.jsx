import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Section from "./components/Section"
import CarModal from "./components/CarModal"
import CarPage from "./components/CarPage"
import Loader from "./components/Loader"
import cars from "./data/cars"

function App() {
  const [selectedCar, setSelectedCar] = useState(null)

  // ✅ LOADER STATE
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  // ✅ SHOW LOADER FIRST
  if (loading) return <Loader />

  return (
    <Routes>

      <Route
        path="/"
        element={
          <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            
            <Header />

            {cars.map((car) => (
              <Section
                key={car.id}
                {...car}
                openModal={() => setSelectedCar(car)}
              />
            ))}

            <CarModal
              car={selectedCar}
              closeModal={() => setSelectedCar(null)}
            />
          </div>
        }
      />

      <Route path="/:id" element={<CarPage />} />
    </Routes>
  )
}

export default App