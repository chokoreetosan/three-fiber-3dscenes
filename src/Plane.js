

import React, { useEffect, useRef,useState, useMemo } from 'react'
import {useThree} from 'react-three-fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import {DoubleSide, Matrix4, VideoTexture} from 'three'
import {  MeshStandardMaterial, PlaneGeometry, TextureLoader, Euler, LinearFilter, RGBFormat } from 'three';
import Diffuse from './Textures/Diffuse.jpg'
export default function Plane(props) {
  const { viewport } = useThree();
  const group = useRef()
  const geometry = new PlaneGeometry(10,10,10)
  // const texture = new TextureLoader().load('./Textures/Diffuse.jpg')
  // const material = new MeshStandardMaterial({
  //     normalMap:texture
  // })
  const video = useMemo(() => {
    console.log('https://www.youtube.com/watch?v=YEU_FIly708');
    const vid = document.createElement("video");
    vid.src = 'miscvideo.mov';
    vid.crossOrigin = "anonymous";
    vid.play();
    return vid;
  }, []);
  const texture = useMemo(() => {
    const t = new VideoTexture(video);
    t.flipY = false;
    t.minFilter = LinearFilter;
    t.magFilter = LinearFilter;
    t.format = RGBFormat;
    return t;
  }, [video]);

  const floor = useRef();
  let euler = new Euler(Math.PI/2,0,0)
  let transformation = new Matrix4;
  transformation.makeRotationFromEuler(euler)
  useEffect(()=>{
    floor.current.applyMatrix4(transformation)
  },[floor])

  return (
    <mesh {...props}>
        <planeBufferGeometry ref={floor} attach={'geometry'} args={[50,50,50]} />
        <meshBasicMaterial map={texture} skinning={true} side={DoubleSide}/>
        
    </mesh>
  )
}
