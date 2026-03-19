import Header from "./components/Header"
import { useState } from "react"
import Section from "./components/Section"
import CarModal from "./components/CarModal"
import cars from "./data/cars"

function App() {
  const [selectedCar, setSelectedCar] = useState(null)

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
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
  )
}

export default App