import { useQuery } from '@tanstack/react-query'
import { fetchGlazes, fetchBases } from '../api/apiClient'

function DonutForm(props) {
  const { baseItem, glazeItem, changeBase, changeGlaze } = props

  const {
    data: glazes,
    isLoading: isLoadingA,
    isError: isErrorA,
  } = useQuery(['glazes'], fetchGlazes)

  const {
    data: bases,
    isLoading: isLoadingB,
    isError: isErrorB,
  } = useQuery(['bases'], fetchBases)

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
    const choosenBase = bases.filter((base) => base.id == evt.target.value)[0]
    changeBase(choosenBase)
    console.log(choosenBase)
  }

  return (
    <>
      <h2 className='text-5xl font-extrabold underline'>Choose a glaze and base</h2>
      <form>
        <div className='mt-5' id="glaze-select">
          <label className="mt-3 mr-2 text-3xl" htmlFor="glaze">Glaze</label>
          <select className="w-64 h-10 p-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none appearance-none"
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

        <div className='mt-3' id="base-select">
          <label className="text-3xl mr-2" htmlFor="base">Base</label>
          <select className="w-64 h-10 p-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none appearance-none"
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
        <button className="mt-3 p-3 bg-sky-300 hover:bg-sky-200 rounded-full">See Donut Detail</button>
      </form>
    </>
  )
}

export default DonutForm
