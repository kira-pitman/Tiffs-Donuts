function DonutDetails(props) {
  const { selectedBase, selectedGlaze } = props

  return (
    <div className="grid grid-flow-row-dense grid-cols-1 gap-3">
      <div className="col-span-1">
        <h2 className="text-5xl font-extrabold leading-snug">Detail Page</h2>
      </div>
      <div className="col-span-1">
        <p className="mt-5 text-3xl">
          {selectedBase.name} base with {selectedGlaze.name} topping
        </p>
      </div>
      <div className="col-span-1">
        <p className="mt-3 text-2xl">Price: ${selectedGlaze.price}</p>
      </div>
    </div>
  )
}

export default DonutDetails
