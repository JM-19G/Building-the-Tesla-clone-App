import { Routes, Route } from "react-router-dom"
import CarPage from "./components/CarPage"
import Header from "./components/Header"
import { useState } from "react"
import Section from "./components/Section"
import CarModal from "./components/CarModal"
import cars from "./data/cars"

function App() {
  const [selectedCar, setSelectedCar] = useState(null)

 return (
  <Routes>

    {/* Homepage */}
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

    {/* Car Page */}
    <Route path="/:id" element={<CarPage />} />

  </Routes>
)
}

export default App