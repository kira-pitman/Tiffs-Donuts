import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import DonutCard from '../components/DonutCard'
import { fetchDonuts } from '../api/apiClient'
import { Canvas } from '@react-three/fiber'
import SavedDonuts from '../components/SavedDonuts'
import { OrbitControls } from '@react-three/drei'
import { Player } from '@lottiefiles/react-lottie-player'

export default function DonutList() {
  const { getAccessTokenSilently } = useAuth0()

  const {
    data: donuts,
    isLoading,
    isError,
  } = useQuery(['donutList'], async () => {
    const token = await getAccessTokenSilently()
    return fetchDonuts({ token })
  })

  if (isError) {
    return <p>Something went wrong!</p>
  }

  if (isLoading) {
    return (
      <Player
        src="/public/lotti/chocolate-donuts.json"
        className="player"
        loop
        autoplay
        style={{ height: '500px', width: '500px' }}
      />
    )
  }

  return (
    <>
      <div className="relative">
        <div className="flex flex-col items-end justify-end mr-72">
          <h2 className="text-5xl font-extrabold leading-snug mb-10 mr-36">
            List of donuts
          </h2>
          <div className="max-h-650 overflow-y-auto custom-scrollbar">
            {donuts.length === 0 ? (
              <h3 className="mb-2 text-2xl tracking-tight text-gray-900">
                Nothing here yet!
              </h3>
            ) : (
              donuts.map((donut) => (
                <DonutCard key={donut.id} donut={donut}></DonutCard>
              ))
            )}
          </div>
        </div>

        <div id="donuts-canvas" className="absolute left-0 top-12">
          {donuts.map((donut) => {
            return (
              <div key={donut.id} className="w-auto relative">
                <Canvas
                  shadows
                  camera={{
                    fov: 3.2,
                    near: 0.1,
                    far: 1000,
                    position: [3, 3, 5],
                  }}
                  style={{
                    background: 'rgba(0, 0, 200, 0)',
                    width: '400px',
                    marginLeft: donut.id % 2 == 0 ? '40px' : '200px',
                    marginTop: '-30px',
                    height: '220px',
                  }}
                >
                  <OrbitControls enableZoom={false} />
                  <SavedDonuts
                    glazeColorCode={donut.glazeColor}
                    baseColorCode={donut.baseColor}
                  />
                </Canvas>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
