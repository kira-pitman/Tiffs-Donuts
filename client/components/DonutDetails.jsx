import getGlazeByName from './apiClient/'

function DonutDetails({base, glaze, glazeItem}) {

  //const glazeItem = await getGlazeByName(glaze) - then call and get glaze object
  // 

//need price just from database?

  return (
    <>
    <h2></h2>

    <p>{base} base with {glaze} topping</p>
    
    
    <h4>Price:</h4><p>{glazeItem.price}</p>
    </>
  )
}

export default DonutDetails