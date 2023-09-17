import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { useRef, useState } from 'react'
import React, { useEffect } from 'react'
// import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'

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
  const { updateGlaze, updateBase } = props
  const [baseItem, setBaseItem] = useState(defaultBase)
  const [glazeItem, setGlazeItem] = useState(defaultGlaze)

  async function changeBase(choosenBase) {
    setBaseItem(choosenBase)
    updateBase(choosenBase.color)
  }

  function changeGlaze(choosenGlaze) {
    setGlazeItem(choosenGlaze)
    updateGlaze(choosenGlaze.color)
  }

  return (
    <>
      <section id="hero" className="h-screen" ref={heroRef}>
        <h1 className="text-3xl font-bold underline ">Tiff Donuts</h1>
        <DonutForm
          baseItem={baseItem}
          glazeItem={glazeItem}
          changeBase={changeBase}
          changeGlaze={changeGlaze}
        />
        <div>
          <a
            href="/"
            onClick={(e) => {
              let detail = document.getElementById('detail')
              e.preventDefault()
              detail &&
                detail.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
          >
            See Donut Details
          </a>
        </div>
      </section>

      <section id="detail" className="h-screen">
        <h1 className="text-3xl font-extrabold">Details</h1>
        <DonutDetails base={baseItem} glaze={glazeItem} />
        {/* Option for scrolling on button click with useRef */}
        {/* <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              heroRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
          >
            Back to donut
          </button>
        </div> */}
      </section>

      <ScrollToTop smooth />
    </>
  )
}

export default Interfaces
