// import { useAuth0 } from '@auth0/auth0-react'

// import { fetchDonutsByToken } from '../api/apiClient'
// import { useQuery } from '@tanstack/react-query'

// export default function SavedDonuts() {
//   const { user, getAccessTokenSilently } = useAuth0()

//   const { data, isError, isLoading } = useQuery(
//     ['donuts'],
//     async () => {
//       const token = await getAccessTokenSilently()
//       return fetchDonutsByToken(token)
//     },
//     !!user
//   )

//   if (!data || isLoading) {
//     return <div>Loading</div>
//   }
//   console.log(data)

//   return <h1>Donuts</h1>
// }
