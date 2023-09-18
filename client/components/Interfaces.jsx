import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { useRef, useState, useEffect } from 'react'
import Footer from './Footer'
import { fetchBase, fetchGlaze } from '../api/apiClient.ts'
import {useSearchParams} from "react-router-dom";

const defaultBase = {
  id: 1,
  name: 'Original',
}

const defaultGlaze = {
  id: 2,
  name: 'Strawberry',
  price: 8,
}

// function Section(props) {
//   const { children, className } = props
//   return (
//     <section
//       className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center ${className}`}
//     >
//       {children}
//     </section>
//   )
// }

function Interfaces(props) {
  const heroRef = useRef(null)
  const detailRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
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

  useEffect(() => {
    // This can be set to use the provided hook by RR if we implement it
    const setDefaults = async () => {
      const searchGlaze = searchParams.get('glaze')
      const searchBase = searchParams.get('base')
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

  function handleScroll(e, ref) {
    e.preventDefault()
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <div className={'flex flex-col items-center w-screen'}>
      <div className="flex items-center">
        <h1 className="text-8xl leading-snug font-yummy py-5">Tiff's Donuts</h1>
        <img src="/images/donut4.png" alt="cat-donut" />
      </div>
        <section
          id="hero"
          className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-end"
          ref={heroRef}
        >
          
          <DonutForm
            selectedBase={selectedBase}
            selectedGlaze={selectedGlaze}
            changeBase={changeBase}
            changeGlaze={changeGlaze}
          />

          <div>
            <button className='mt-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full' onClick={(e) => handleScroll(e, detailRef)}>
              See Donut Details
            </button>
          </div>
        </section>

        <section
          id="detail"
          className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center"
          ref={detailRef}
        >
          <DonutDetails
            selectedBase={selectedBase}
            selectedGlaze={selectedGlaze}
          />
          <div>
            <button className='mt-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full' onClick={(e) => handleScroll(e, heroRef)}>
              Back to donut
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Interfaces
