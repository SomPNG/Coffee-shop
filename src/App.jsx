import React from "react"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import WhereToBuy from "./Components/WhereToBuy"

function App() {

  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
      <WhereToBuy/>
    </div>
  )
}

export default App
