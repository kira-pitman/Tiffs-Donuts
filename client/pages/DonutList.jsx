import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import DonutCard from '../components/DonutCard'
import { fetchDonuts } from '../api/apiClient'

export default function DonutList() {

  const { getAccessTokenSilently } = useAuth0()

  const {
    data,
    isLoading,
    isError,
  } = useQuery(['donutList'], async () => {
    const token = await getAccessTokenSilently()
    return fetchDonuts({token})
  })

  if (isError) {
    return <p>Something went wrong!</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  const donutsFakeList = [
    {
        id: 1,
        base: 3,
        baseName: 'Milky',
        glaze: 1,
        glazeName: 'Chocolate',
        price: 8,
        auth0_id: 'hello123',
      },
      {
        id: 2,
        base: 1,
        baseName: 'Original',
        glaze: 1,
        glazeName: 'Chocolate',
        price: 8,
        auth0_id: 'hello123',
      },
      {
        id: 3,
        base: 2,
        baseName: 'Chocolate',
        glaze: 2,
        glazeName: 'Strawberry',
        price: 9,
        auth0_id: 'world156',
      }
  ]
 
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold leading-snug mb-10">List of donuts</h2>
        {donutsFakeList.length === 0 ? <h3 className="mb-2 text-2xl tracking-tight text-gray-900">List is empty</h3> : donutsFakeList.map(donut => <DonutCard key={donut.id} donut={donut}></DonutCard>)}
      </div>
    </>
  )
}