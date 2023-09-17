import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { useRef, useState } from 'react'
import Footer from './Footer'
//import React, { useEffect } from 'react'
// import { BrowserRouter } from 'react-router-dom'

const defaultBase = {
  id: 1,
  name: 'Original',
}

const defaultGlaze = {
  id: 2,
  name: 'Strawberry',
  price: 8,
}
function Interfaces(props) {
  const heroRef = useRef(null)
  const detailRef = useRef(null)
  const { updateGlaze, updateBase } = props
  const [selectedBase, setSelectedBase] = useState(defaultBase)
  const [selectedGlaze, setSelectedGlaze] = useState(defaultGlaze)

  function changeBase(choosenBase) {
    setSelectedBase(choosenBase)
    updateBase(choosenBase.color)
  }

  function changeGlaze(choosenGlaze) {
    setSelectedGlaze(choosenGlaze)
    updateGlaze(choosenGlaze.color)
  }

  function handleScroll(e, ref) {
    e.preventDefault()
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <section id="hero" className="h-screen" ref={heroRef}>
        <h1 className="text-3xl font-bold underline ">Tiff Donuts</h1>
        <DonutForm
          selectedBase={selectedBase}
          selectedGlaze={selectedGlaze}
          changeBase={changeBase}
          changeGlaze={changeGlaze}
        />
        <div>
          <button onClick={(e) => handleScroll(e, detailRef)}>
            See Donut Details
          </button>
        </div>
      </section>

      <section id="detail" className="h-screen" ref={detailRef}>
        <h1 className="text-3xl font-extrabold">Details</h1>
        <DonutDetails
          selectedBase={selectedBase}
          selectedGlaze={selectedGlaze}
        />
        <div>
          <button onClick={(e) => handleScroll(e, heroRef)}>
            Back to donut
          </button>
        </div>
        
      </section>
      
      <Footer />
    </>
  )
}

export default Interfaces
