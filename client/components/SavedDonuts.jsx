import { Canvas } from '@react-three/fiber'

import DonutModel from './DonutModel'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import * as THREE from 'three'

function Donuts(props) {
  const { glazeColorCode, baseColorCode } = props

  const { materials } = useGLTF('./donut_cat/scene.gltf')

  const baseMaterial = materials['Material.003'].clone()
  baseMaterial.color = new THREE.Color(baseColorCode)

  const glazeMaterial = materials['Material.003'].clone()
  glazeMaterial.color = new THREE.Color(glazeColorCode)

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
        scale={[1.5, 1.5, 1.5]}
        glazeColor={glazeMaterial}
        baseColor={baseMaterial}
        texture={''}
      />
    </mesh>
  )
}

export default Donuts
