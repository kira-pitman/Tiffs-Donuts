import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { useRef, useState, useEffect } from 'react'
import Footer from './Footer'
import { fetchBase, fetchGlaze } from '../api/apiClient.ts'

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
        <h1 className="text-8xl leading-snug font-yummy">Tiff Donuts</h1>
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
            <button onClick={(e) => handleScroll(e, detailRef)}>
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
            <button onClick={(e) => handleScroll(e, heroRef)}>
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
