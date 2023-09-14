import { useState, useQuery } from 'react'

function DonutForm(props) {
  const { updateGlaze, updateBase, changeBase, changeGlaze } = props
  const flavorArray = ['Chocolate', 'Strawberry', 'Green tea', 'Lemon']
  const baseArray = ['Original', 'Chocolate']
  // const {
  //   data: glazes,
  //   isLoading,
  //   isError,
  // } = useQuery[('glazes', getGlazes]

  // const {
  //   data: bases,
  //   isLoading,
  //   isError,
  // } = useQuery[('bases', getBases]

  const handleGlazeChange = async (evt) => {
    changeGlaze(evt.target.value)
    // const glazeColor = await getGlazeByName(evt.target.value)
    // updateGlaze(glazeColor.color)
  }

  const handleBaseChange = (evt) => {
    changeBase(evt.target.value)
    // const baseColor = await getBaseByName(evt.target.value)
    // updateBase(baseColor.color)
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
            value={glaze}
            name="name"
          >
            {flavorArray.map((glaze, index) => {
              return (
                <option key={index} value={glaze}>
                  {glaze}
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
            value={base}
            name="name"
          >
            {baseArray.map((base, index) => {
              return (
                <option key={index} value={base}>
                  {base}
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
