import React from "react"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import WhereToBuy from "./Components/WhereToBuy"
import AppBanner from "./Components/AppBanner"

function App() {

  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
    </div>
  )
}

export default App
