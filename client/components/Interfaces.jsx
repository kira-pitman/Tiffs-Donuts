import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { useState } from 'react'

function Interfaces(props) {
  const { updateGlaze, updateBase } = props
  const [base, setBase] = useState('')
  const [glaze, setGlaze] = useState('')

  function changeBase(baseName) {
    setBase(baseName)
  }

  function changeGlaze(glazeName) {
    setGlaze(glazeName)
  }

  return (
    <>
      <section id="hero-section">
        <h1 className="text-3xl font-bold underline">Tiff Donuts</h1>
        <DonutForm
          updateGlaze={updateGlaze}
          updateBase={updateBase}
          changeBase={changeBase}
          changeGlaze={changeGlaze}
        />
      </section>

      <section id="detail-section">
        <h1 className="text-3xl font-extrabold">Details</h1>
        <DonutDetails base={base} glaze={glaze} />
      </section>
    </>
  )
}

export default Interfaces
