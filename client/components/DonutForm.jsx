import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchFlavorNames, fetchBaseNames } from '../api/apiClient'

function DonutForm(props) {
  const { baseItem, glazeItem, changeBase, changeGlaze } = props

  const {
    data: glazes,
    isLoading: isLoadingA,
    isError: isErrorA,
  } = useQuery(['glazes'], fetchFlavorNames)

  const {
    data: bases,
    isLoading: isLoadingB,
    isError: isErrorB,
  } = useQuery(['bases'], fetchBaseNames)

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
    changeGlaze(choosenGlaze)
  }

  const handleBaseChange = (evt) => {
    changeBase(evt.target.value)
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
            defaultValue={glazeItem.id}
            name="name"
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
            defaultValue={baseItem.id}
            name="name"
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
