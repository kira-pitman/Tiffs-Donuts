import { Canvas } from '@react-three/fiber'
import DonutModel from '../components/DonutModel'
import { useState } from 'react'

const donuts = {
  id: 100,
  glaze: '#f57f8e',
  base: '#f57f8e',
  price: 9,
}

function DonutList() {
  const [glazeColor, setGlazeColor] = useState(donuts.glaze)
  const [baseColor, setBaseColor] = useState(donuts.base)

  return (
    <Canvas>
      <mesh>
        <ambientLight />
        <spotLight intensity={0.5} />

        <DonutModel
          scale={[0.4, 0.4, 0.4]}
          glazeColor={glazeColor}
          baseColor={baseColor}
          texture={''}
        />
      </mesh>
    </Canvas>
  )
}

export default DonutList
