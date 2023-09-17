import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import {useEffect, useState} from 'react'
import {fetchBase, fetchGlaze} from "../api/apiClient.ts";

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

  useEffect(() => {

    // This can be set to use the provided hook by RR if we implement it
    const setDefaults = async () => {
      const params = new URLSearchParams(window.location.search)
      const searchGlaze = params.get('glaze')
      const searchBase = params.get('base')
      if (searchGlaze) {
        const glaze = await fetchGlaze(Number(searchGlaze))
        if (glaze) {
          changeGlaze(glaze)
        }
      }
      if (searchBase) {
        const base = await fetchBase(Number(searchBase))
        if (base) {
          changeBase(base)
        }
      }
    }

    try {
      void setDefaults()
    } catch (e) {
      alert('Could not set donut values')
    }
  }, [])



  function changeBase(choosenBase) {
    setBaseItem(choosenBase)
    updateBase(choosenBase.color)
  }

  function changeGlaze(choosenGlaze) {
    setGlazeItem(choosenGlaze)
    updateGlaze(choosenGlaze.color)
  }

  return (
   
    <div className={'flex flex-col items-center w-screen'}>
    <h1 className="text-8xl leading-snug font-yummy">Tiff Donuts</h1>
      <Section id="hero-section" className={'items-end'}>
        <DonutForm
          baseItem={baseItem}
          glazeItem={glazeItem}
          changeBase={changeBase}
          changeGlaze={changeGlaze}
        />
      </Section>

      <Section id="detail-section" className={'items-start'}>
        <DonutDetails base={baseItem} glaze={glazeItem} />
      </Section>
    </div>
   
  )
}

export default Interfaces
