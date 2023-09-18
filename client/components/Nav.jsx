import { useAuth0 } from '@auth0/auth0-react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Nav() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  // const params = useSearchParams()
  //const searchGlaze = searchParams.get('glaze')

  function handleLogin() {
    loginWithRedirect({ redirectUri: `${window.location.origin}` })
  }

  function handleLogout() {
    logout({ returnTo: `${window.location.origin}` })
  }

  return (
    <>
      <nav className="mx-auto w-full flex justify-left">
        {!isAuthenticated ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </>
  )
}
