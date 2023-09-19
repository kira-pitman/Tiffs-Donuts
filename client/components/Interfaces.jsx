import DonutForm from './DonutForm'
import DonutDetails from './DonutDetails'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import Footer from './Footer'
import { fetchBase, fetchGlaze } from '../api/apiClient.ts'
import { useSearchParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SaveButton from './SaveButton'

const defaultBase = {
  id: 1,
  name: 'Original',
  color: '#e5e0cb',
}

const defaultGlaze = {
  id: 2,
  name: 'Strawberry',
  color: '#f57f8e',
  price: 9,
}

function Interfaces(props) {
  const { isAuthenticated } = useAuth0()
  const heroRef = useRef(null)
  const detailRef = useRef(null)
  const { updateGlaze, updateBase, updateTexture } = props
  const [searchParams, setSearchParams] = useSearchParams()

  const [selectedBase, setSelectedBase] = useState(defaultBase)
  const [selectedGlaze, setSelectedGlaze] = useState(defaultGlaze)
  const [withGold, setWithGold] = useState(false)

  const newTexture = useLoader(TextureLoader, 'gold.jpg')

  function changeBase(choosenBase) {
    setSelectedBase(choosenBase)
    updateBase(choosenBase.color)
  }

  function changeGlaze(choosenGlaze) {
    setSelectedGlaze(choosenGlaze)
    updateGlaze(choosenGlaze.color)
  }

  function addGold() {
    updateGlaze('#FFFFFF')
    updateBase('#FFFFFF')
    updateTexture(newTexture)
    setWithGold(true)
  }

  function cancelGold() {
    updateBase(selectedBase.color)
    updateGlaze(selectedGlaze.color)
    updateTexture('')
    setWithGold(false)
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
          <h1 ref={heroRef} className="text-8xl leading-snug font-yummy py-5">
            Tiff&apos;s Donuts
          </h1>
          <img src="/images/donut4.png" alt="cat-donut" />
        </div>
        <section
          id="hero"
          className="h-screen w-screen -mt-10 mr-9 p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-end"
        >
          <DonutForm
            selectedBase={selectedBase}
            selectedGlaze={selectedGlaze}
            changeBase={changeBase}
            changeGlaze={changeGlaze}
          />

          <div>
            <button
              className="mt-5 p-3 px-5 bg-[#d7d41e] hover:bg-[#8f8d16] rounded-full"
              onClick={addGold}
            >
              Coat with gold
            </button>
            <button
              className="mt-3 p-3 ml-3 px-7 bg-[#d7d41e77] hover:bg-[#8f8d1633] rounded-full"
              onClick={cancelGold}
            >
              Remove gold
            </button>
          </div>
          <div>
            <button
              className="mt-5 p-3 bg-sky-400 hover:bg-sky-300 rounded-full "
              onClick={(e) => handleScroll(e, detailRef)}
            >
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
            withGold={withGold}
          />
          <div>
            <button
              className="mt-3 p-3 bg-sky-400 hover:bg-sky-300 rounded-full"
              onClick={(e) => handleScroll(e, heroRef)}
            >
              Back to donut
            </button>
            {isAuthenticated && (
              <SaveButton
                selectedBase={selectedBase}
                selectedGlaze={selectedGlaze}
              />
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Interfaces
