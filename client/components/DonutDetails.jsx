function DonutDetails(props) {
  const { selectedBase, selectedGlaze } = props

  return (
    <>
      <h2>Detail Page</h2>

      <p>
        {selectedBase.name} base with {selectedGlaze.name} topping
      </p>

      <h4>Price:</h4>
      <p>{selectedGlaze.price}</p>
    </>
  )
}

export default DonutDetails
