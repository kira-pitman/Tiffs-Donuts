import {OrbitControls} from '@react-three/drei'

import DonutModel from './DonutModel.jsx'
// import React from 'react'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

export default function DonutScene() {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <>
      <mesh ref={ref}>
        <ambientLight />
        <spotLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <DonutModel scale={[1, 1, 1]} />
      </mesh>
    </>
  )
}
