import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
   <>
  {/* NAVBAR */}
  <div className="fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 text-white">
    <h1 className="font-bold text-xl">TESLA</h1>

    <div className="hidden md:flex gap-6">
      <p onClick={() => scrollTo("models")} className="cursor-pointer">Model S</p>
      <p onClick={() => scrollTo("model3")} className="cursor-pointer">Model 3</p>
      <p onClick={() => scrollTo("modelx")} className="cursor-pointer">Model X</p>
      <p onClick={() => scrollTo("modely")} className="cursor-pointer">Model Y</p>
    </div>

    <p onClick={() => setOpen(true)} className="cursor-pointer">
      Menu
    </p>
  </div>

  {/* OVERLAY */}
  {open && (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 bg-black/50 z-40"
    />
  )}

  {/* SIDEBAR */}
  {open && (
    <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-4">
      <button onClick={() => setOpen(false)} className="p-4">X</button>

      <div className="flex flex-col gap-4 p-4">
        <p className="font-semibold">Vehicles</p>
        <p onClick={() => scrollTo("models")}>Model S</p>
        <p onClick={() => scrollTo("model3")}>Model 3</p>
        <p onClick={() => scrollTo("modelx")}>Model X</p>
        <p onClick={() => scrollTo("modely")}>Model Y</p>

        <hr />

        <p className="font-semibold">More</p>
        <p>Charging</p>
        <p>Insurance</p>
        <p>Shop</p>
        <p>Account</p>
      </div>
    </div>
  )}
</>
  )
}

export default Header
