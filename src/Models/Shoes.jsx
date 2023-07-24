/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 shoes.gltf --transform 
Files: shoes.gltf [39.03MB] > shoes-transformed.glb [729.79KB] (98%)
Author: shah_max (https://sketchfab.com/shah_max)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shoes-5b57582865104fc9839656a6f160806a
Title: shoes
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three' // Import the THREE object


export default function Model(props) {
  const { nodes, materials } = useGLTF('/shoes-transformed.glb')

  materials.shoes.color = new THREE.Color('green')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.shoes_shoes_0.geometry}  material={materials.shoes} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/shoes-transformed.glb')
