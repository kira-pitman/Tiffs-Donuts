import { useScroll } from '@react-three/drei'

import DonutModel from './DonutModel.jsx'
// import React from 'react'
import { useRef, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'

export const FLOOR_HEIGHT = 0.2
export const NB_FLOORS = 2
export default function DonutScene(props) {
  const { glazeColor, baseColor } = props

  const ref = useRef()
  const tl = useRef()
  const scroll = useScroll()

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.5 * delta
  })

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()

    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    )
  }, [])

  return (
    <>
      <mesh ref={ref} position={[-0.2, -0.05, 0]}>
        <ambientLight />
        <spotLight intensity={0.5} />

        <DonutModel
          scale={[1, 1, 1]}
          glazeColor={glazeColor}
          baseColor={baseColor}
        />
      </mesh>
    </>
  )
}
