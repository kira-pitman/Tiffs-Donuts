import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  function handleLogin() {
    loginWithRedirect({ redirectUri: `${window.location.origin}` });
  }

  function handleLogout() {
    logout({ returnTo: `${window.location.origin}` });
  }

  console.log(isAuthenticated);

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
  );
}
