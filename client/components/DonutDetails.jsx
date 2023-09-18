function DonutDetails(props) {
  const { selectedBase, selectedGlaze, withGold } = props
  const goldCoat = {
    name: 'coated with gold',
    price: 1000,
  }
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 gap-3">
      <div className="col-span-1">
        <div className="flex items-center">
          <h2 className="text-5xl font-extrabold leading-snug">Detail</h2>
          <img src="/images/donut3.png" alt="white-cat-donut" />
        </div>
      </div>
      <div className="col-span-1">
        <p className="mt-5 text-3xl">
          {selectedBase.name} base with {selectedGlaze.name} topping{' '}
          <span className="font-bold text-[#8f8f32]">
            {withGold ? goldCoat.name : ''}
          </span>
        </p>
      </div>
      <div className="col-span-1">
        <p className="mt-3 text-2xl">
          Price: ${selectedGlaze.price} {withGold ? `+ $${goldCoat.price}` : ''}
        </p>
      </div>
    </div>
  )
}

export default DonutDetails
