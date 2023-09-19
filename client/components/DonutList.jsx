import { Canvas } from '@react-three/fiber'
import Donuts from '../components/Donuts'
import { OrbitControls } from '@react-three/drei'

function DonutList() {
  const donuts = [
    {
      id: 1,
      glazeColorId: '#f57f8e',
      baseColorId: '#fffbec',
    },
    {
      id: 2,
      glazeColorId: '#a7d688',
      baseColorId: '#f57f8e',
    },
    {
      id: 3,
      glazeColorId: '#e79c44',
      baseColorId: '#f57f8e',
    },
  ]

  return (
    <div>
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
                marginLeft: '40px',
                height: '230px',
              }}
            >
              <OrbitControls enableZoom={false} />
              <Donuts
                glazeColorId={donut.glazeColorId}
                baseColorId={donut.baseColorId}
              />
            </Canvas>
          </div>
        )
      })}
    </div>
  )
}

export default DonutList
