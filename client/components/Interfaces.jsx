import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { useState } from 'react'

const defaultBase = {
  id: 2,
  name: 'Strawberry',
}

const defaultGlaze = {
  id: 2,
  name: 'Strawberry',
  price: 8,
}
function Interfaces(props) {
  const { updateGlaze, updateBase } = props
  const [baseItem, setBaseItem] = useState(defaultBase)
  const [glazeItem, setGlazeItem] = useState(defaultGlaze)

  async function changeBase(choosenBase) {
    setBaseItem(choosenBase)
    updateBase(Number(choosenBase.color))
  }

  function changeGlaze(choosenGlaze) {
    setGlazeItem(choosenGlaze)
    updateGlaze(Number(choosenGlaze.color))
  }

  return (
    <>
      <section id="hero-section">
        <h1 className="text-3xl font-bold underline">Tiff Donuts</h1>
        <DonutForm
          baseItem={baseItem}
          glazeItem={glazeItem}
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
