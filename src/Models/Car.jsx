

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/car-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Material.geometry} material={materials['Scene_-_Root']} />
    </group>
  )
}

useGLTF.preload('/car-transformed.glb')
