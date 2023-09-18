import { useAuth0 } from '@auth0/auth0-react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { saveDonut } from '../api/apiClient'

export default function Nav() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const { getAccessTokenSilently } = useAuth0()

  const [searchParams, setSearchParams] = useSearchParams()

  function handleLogin() {
    loginWithRedirect({ redirectUri: `${window.location.origin}` })
  }

  function handleLogout() {
    logout({ returnTo: `${window.location.origin}` })
  }

  async function handleSave() {
    const donut = {
      glaze: searchParams.get('glaze'),
      base: searchParams.get('base'),
    }
    const token = await getAccessTokenSilently()
    saveDonut(token, donut)
  }

  return (
    <>
      <nav className="mx-auto w-full flex justify-left">
        {!isAuthenticated ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleSave}>Save your donut</button>
            <Link to="/me">
              <button>View your donuts</button>
            </Link>
          </>
        )}
      </nav>
    </>
  )
}
