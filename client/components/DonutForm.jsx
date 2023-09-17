import { useQuery } from '@tanstack/react-query'
import { fetchGlazes, fetchBases } from '../api/apiClient'
import {setURLParams} from "../lib/utils.ts";

function DonutForm(props) {
  const { baseItem, glazeItem, changeBase, changeGlaze } = props

  const {
    data: glazes,
    isLoading: isLoadingA,
    isError: isErrorA,
  } = useQuery(['glazes'], fetchGlazes)

  const {
    data: bases,
    isLoading: isLoadingB,
    isError: isErrorB,
  } = useQuery(['bases'], fetchBases)

  if (isErrorA) {
    return <p>Something went wrong</p>
  }

  if (isErrorB) {
    return <p>Something went wrong</p>
  }

  if (!glazes || isLoadingA) {
    return <>loading...</>
  }

  if (!bases || isLoadingB) {
    return <>loading...</>
  }

  const handleGlazeChange = (evt) => {
    const choosenGlaze = glazes.filter(
      (glaze) => glaze.id == evt.target.value
    )[0]
    console.log(choosenGlaze)

    // This can be set to use the provided hook by RR if we implement it
    setURLParams('glaze', String(choosenGlaze.id))
    changeGlaze(choosenGlaze)
  }

  const handleBaseChange = (evt) => {
    const choosenBase = bases.filter((base) => base.id == evt.target.value)[0]

    // This can be set to use the provided hook by RR if we implement it
    setURLParams('base', String(choosenBase.id))
    changeBase(choosenBase)
    console.log(choosenBase)
  }

  return (
    <>
      <form>
        <div className="grid grid-cols-2 gap-3 mt-5 place-items-center">
          <div className="col-start-1 col-end-7">
            <h2 className="text-5xl font-extrabold leading-snug">Choose a flavor</h2>
          </div>
          <div id="glaze-select" className="col-start-1 col-end-3">
            <label className="mt-3 mr-2 text-3xl" htmlFor="glaze">Glaze</label>
            <select
              id="glaze"
              className="w-64 h-10 p-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none appearance-none"
              onChange={handleGlazeChange}
              value={glazeItem.id}
              name="glaze"
            >
              {glazes.map((glaze, index) => {
                return (
                  <option key={index} value={glaze.id}>
                    {glaze.name}
                  </option>
                )
              })}
            </select>
          </div>

          <div id="base-select" className="col-end-7 col-span-2">
            <label htmlFor="base" className="text-3xl mr-2">Base</label>
            <select
              id="base"
              className="w-64 h-10 p-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none appearance-none"
              onChange={handleBaseChange}
              value={baseItem.id}
              name="base"
            >
              {bases.map((base, index) => {
                return (
                  <option key={index} value={base.id}>
                    {base.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
      </form>
    </>
  )
}

export default DonutForm
