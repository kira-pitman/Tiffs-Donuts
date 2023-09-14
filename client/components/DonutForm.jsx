import { useState } from 'react'

function DonutForm(props) {
  const {updateGlaze} = props
  const flavorArray = ['Chocolate', 'Strawberry', 'Green tea', 'Lemon']
  const baseArray = ['Original', 'Chocolate']

  const [base, setBase] = useState('')
  const [flavor, setFlavor] = useState('')

  const handleFlavorChange = (evt) => {
    setFlavor(evt.target.value)
  }
 
  const handleBaseChange = (evt) => {
    setBase(evt.target.value)
  }
 
  return (
    <>
      <h2>Choose a glaze and base</h2>
      <form>
        <div id="flavor-select">
          <label htmlFor="flavor">Glaze</label>
          <select
            id="flavor"
            onChange={handleFlavorChange}
            value={flavor}
            name="name"
          >
            {flavorArray.map((flavor, index) => {
              return (
                <option key={index} value={flavor}>
                  {flavor}
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
      </form>
    </>
  )
}

export default DonutForm
