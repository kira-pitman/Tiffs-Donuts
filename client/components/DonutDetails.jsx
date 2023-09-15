// import getGlazeByName from './apiClient/'

function DonutDetails(props) {
  const { base, glaze } = props

  return (
    <>
      <p  className="mt-5 text-3xl">
        {base.name} base with {glaze.name} topping
      </p>

      <h4  className="mt-3 text-3xl">Price: </h4>
      <p  className="mt-3 text-2xl">${glaze.price}</p>
    </>
  )
}

export default DonutDetails
