import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Scroll, ScrollControls } from '@react-three/drei'
import Interfaces from './components/Interfaces.jsx'
import DonutScene from './components/DonutScene.jsx'
import * as THREE from 'three'

function App() {
  // const [section, setSection] = useState(0)
  const { materials } = useGLTF('./donut_cat/scene.gltf')

  const [glazeColor, setGlazeColor] = useState(
    materials['Material.004'].clone()
  )

  const [baseColor, setBaseColor] = useState(materials['Material.003'].clone())

  function updateGlaze(hex) {
    const newMaterials = glazeColor.clone()
    newMaterials.color = new THREE.Color(hex)
    setGlazeColor(newMaterials)
  }

  function updateBase(hex) {
    const newMaterials = baseColor.clone()
    newMaterials.color = new THREE.Color(hex)
    setBaseColor(newMaterials)
  }

  return (
    <>
      <Canvas
        shadows
        camera={{ fov: 3, near: 0.1, far: 1000, position: [3, 3, 5] }}
      >
        <color attach="background" args={['#ececec']} />
        <ScrollControls pages={2} demping={0.1}>
          <DonutScene glazeColor={glazeColor} baseColor={baseColor} />
          <Scroll html>
            <Interfaces updateGlaze={updateGlaze} updateBase={updateBase} />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
