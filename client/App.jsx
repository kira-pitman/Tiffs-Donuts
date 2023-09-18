import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import SavedDonuts from './components/SavedDonuts'

const queryClient = new QueryClient()

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Outlet />
      </QueryClientProvider>
    </main>
  )
}

export default App
