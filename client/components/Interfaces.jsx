import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { useState } from 'react'

const defaultBase = {
  id: 1,
  name: 'Original',
}

const defaultGlaze = {
  id: 2,
  name: 'Strawberry',
  price: 8,
}

function Section(props) {
  const { children , className } = props
  return <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center ${className}`}>{children}</section>
}

function Interfaces(props) {
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
   
    <div className={'flex flex-col items-center w-screen'}>
    <h1 className="text-8xl font-bold underline">Tiff Donuts</h1>
      <Section id="hero-section" className={'items-end'}>
        
        <DonutForm
          baseItem={baseItem}
          glazeItem={glazeItem}
          changeBase={changeBase}
          changeGlaze={changeGlaze}
        />
      </Section>

      <Section id="detail-section" className={'items-start'}>
        <h2 className="text-5xl underline">Details</h2>
        <DonutDetails base={baseItem} glaze={glazeItem} />
      </Section>
    </div>
   
  )
}

export default Interfaces
