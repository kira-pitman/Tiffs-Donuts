// import getGlazeByName from './apiClient/'

function DonutDetails(props) {
  const { base, glaze } = props

  return (
    <>
      <h2>Detail Page</h2>

      <p>
        {base.name} base with {glaze.name} topping
      </p>

      <h4>Price:</h4>
      <p>{glaze.price}</p>
    </>
  )
}

export default DonutDetails
