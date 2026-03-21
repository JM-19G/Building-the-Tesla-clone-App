import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <>
      <div className="fixed top-0 w-full flex justify-between items-center px-6 py-4 z-50 text-white backdrop-blur-md bg-white/10">
        <h1 className="font-bold text-xl">TESLA</h1>

        <div className="hidden md:flex gap-6">
          <p onClick={() => scrollTo("models")} className="cursor-pointer">Model S</p>
          <p onClick={() => scrollTo("model3")} className="cursor-pointer">Model 3</p>
          <p onClick={() => scrollTo("modelx")} className="cursor-pointer">Model X</p>
          <p onClick={() => scrollTo("modely")} className="cursor-pointer">Model Y</p>
        </div>

        <p
          onClick={() => setOpen(true)}
          className="cursor-pointer px-4 py-1 rounded-full hover:bg-white/20 transition"
         >
          Menu
        </p>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 transform ${
        open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-50`}
       >

         {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
        )}
 
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1502877338535-766e1452684a)"
    }}
  ></div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

  {/* CONTENT */}
  <div className="relative z-10 text-white h-full flex flex-col">

        {/* CLOSE BUTTON */}
<button
  onClick={() => setOpen(false)}
  className="p-6 text-xl text-right"
>
  ✕
</button>

<div className="flex flex-col gap-6 px-6 text-lg">

  <p className="opacity-70 uppercase text-sm">Vehicles</p>

  <p onClick={() => scrollTo("models")} className="hover:translate-x-2 transition cursor-pointer">Model S</p>
  <p onClick={() => scrollTo("model3")} className="hover:translate-x-2 transition cursor-pointer">Model 3</p>
  <p onClick={() => scrollTo("modelx")} className="hover:translate-x-2 transition cursor-pointer">Model X</p>
  <p onClick={() => scrollTo("modely")} className="hover:translate-x-2 transition cursor-pointer">Model Y</p>

  <hr className="border-white/20" />

  <p className="opacity-70 uppercase text-sm">More</p>

  <p className="hover:translate-x-2 transition cursor-pointer">Charging</p>
  <p className="hover:translate-x-2 transition cursor-pointer">Insurance</p>
  <p className="hover:translate-x-2 transition cursor-pointer">Shop</p>
  <p className="hover:translate-x-2 transition cursor-pointer">Account</p>

</div>
</div>
      </div>
    </>
  )
}

export default Header
