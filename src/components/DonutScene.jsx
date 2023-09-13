import { Environment, OrbitControls } from '@react-three/drei'

import DonutModel from './DonutModel'
import React from 'react'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { motion, useScroll } from 'framer-motion'

export default function DonutScene() {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.5 * delta
  })

  const { scrollYProgress } = useScroll()

  return (
    <>
      <mesh ref={ref} style={{ scale: scrollYProgress }}>
        <ambientLight />
        <spotLight intensity={0.5} />
        <OrbitControls enableZoom={false} />
        <DonutModel scale={[1, 1, 1]} />
      </mesh>
    </>
  )
}
