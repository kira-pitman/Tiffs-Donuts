// import getGlazeByName from './apiClient/'

function DonutDetails(props) {
  const { base, glaze } = props

  return (
    <div className="grid grid-flow-row-dense grid-cols-1 gap-3">
      <div className="col-span-1">
        <h2 className="text-5xl font-extrabold leading-snug">Detail Page</h2>
      </div>
      <div className="col-span-1">
        <p  className="mt-5 text-3xl">
          {base.name} base with {glaze.name} topping
        </p>
      </div>
      <div className="col-span-1">
        <p className="mt-3 text-2xl">Price: ${glaze.price}</p>
      </div>
    </div>
  )
}

export default DonutDetails
