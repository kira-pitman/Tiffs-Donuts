import { Canvas } from '@react-three/fiber'
import DonutModelForList from './DonutModelForList'
import DonutModel from './DonutModel'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import * as THREE from 'three'

function Donuts(props) {
  const { glazeColorId, baseColorId } = props

  const { materials } = useGLTF('./donut_cat/scene.gltf')
  // const [baseMaterial, setBaseMaterial] = useState(materials['Material.003'].clone())
  // const [baseMaterial, setGlazeMaterial] = useState(materials['Material.004'].clone())
  const baseMaterial = materials['Material.003'].clone()
  baseMaterial.color = new THREE.Color(baseColorId)

  const glazeMaterial = materials['Material.003'].clone()
  glazeMaterial.color = new THREE.Color(glazeColorId)

  const ref = useRef()
  useFrame((_, delta) => {
    ref.current.rotation.y += 0.5 * delta
    ref.current.rotation.x += 0.5 * delta
  })

  return (
    <mesh ref={ref}>
      <ambientLight />
      <spotLight intensity={0.5} />

      <DonutModel
        scale={[1.2, 1.2, 1.2]}
        glazeColor={glazeMaterial}
        baseColor={baseMaterial}
        texture={''}
      />
    </mesh>
  )
}

export default Donuts
