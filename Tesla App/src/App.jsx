import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Section from "./components/Section"
import CarModal from "./components/CarModal"
import CarPage from "./components/CarPage"
import cars from "./data/cars"

function App() {
  const [selectedCar, setSelectedCar] = useState(null)

  return (
    <Routes>

      {/* HOMEPAGE */}
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

      {/* CAR PAGE */}
      <Route path="/:id" element={<CarPage />} />

    </Routes>
  )
}

export default App