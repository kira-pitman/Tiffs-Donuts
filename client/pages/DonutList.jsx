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
 
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold leading-snug mb-10">List of donuts</h2>
        <div className="max-h-650 overflow-y-auto custom-scrollbar">
          {data.length === 0 ? <h3 className="mb-2 text-2xl tracking-tight text-gray-900">Nothing here yet!</h3> : data.map(donut => <DonutCard key={donut.id} donut={donut}></DonutCard>)}
        </div>
      </div>
    </>
  )
}