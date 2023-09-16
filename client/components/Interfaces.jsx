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
function Interfaces(props) {
  const { updateGlaze, updateBase } = props

  const [baseItem, setBaseItem] = useState(defaultBase)
  const [glazeItem, setGlazeItem] = useState(defaultGlaze)

  useEffect(() => {
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
