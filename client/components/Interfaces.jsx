import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { useState } from 'react'

const defaultBase = {
  name: 'original',
}

const defaultGlaze = {
  name: 'Strawberry',
  price: 8,
}
function Interfaces(props) {
  const { updateGlaze, updateBase } = props
  const [baseItem, setBaseItem] = useState(defaultBase)
  const [glazeItem, setGlazeItem] = useState(defaultGlaze)

  async function changeBase(baseName) {
    // const newBase = await getBaseByName(baseName)
    // setBaseItem(newBase)
  }

  function changeGlaze(glazeName) {
    // const newGlaze = await getGlazeByName(baseName)
    // setGlazeItem(newBase)
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
        <DonutDetails base={baseItem} glaze={glazeItem} />
      </section>
    </>
  )
}

export default Interfaces
