

import React, { useEffect, useRef } from 'react'

import { useGLTF, useTexture } from '@react-three/drei'
import {DoubleSide, Matrix4} from 'three'
import {  MeshStandardMaterial, PlaneGeometry, TextureLoader, Euler } from 'three';
import Diffuse from './Textures/Diffuse.jpg'
export default function Plane(props) {
  const group = useRef()
  const geometry = new PlaneGeometry(10,10,10)
  const texture = new TextureLoader().load('./Textures/Diffuse.jpg')
  // const material = new MeshStandardMaterial({
  //     normalMap:texture
  // })
  const floor = useRef();
  let euler = new Euler(Math.PI/2,0,0)
  let transformation = new Matrix4;
  transformation.makeRotationFromEuler(euler)
  useEffect(()=>{
    floor.current.applyMatrix4(transformation)
  },[floor])

  // const plane = new Mesh(geometry,material);
  return (
    <mesh {...props}>
        <planeGeometry ref={floor} attach={'geometry'} args={[100,100,100]} />
        <meshBasicMaterial map={texture} skinning={true} side={DoubleSide}/>
    </mesh>
  )
}
