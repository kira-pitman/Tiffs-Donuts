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
      <h2>Choose a glaze and base</h2>
      <form>
        <div id="glaze-select">
          <label htmlFor="glaze">Glaze</label>
          <select
            id="glaze"
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

        <div id="base-select">
          <label htmlFor="base">Base</label>
          <select
            id="base"
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
        <button>See Donut Detail</button>
      </form>
    </>
  )
}

export default DonutForm
