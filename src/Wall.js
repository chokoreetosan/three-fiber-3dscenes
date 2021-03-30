

import React, { useEffect, useRef,useState, useMemo } from 'react'
import {useThree} from 'react-three-fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import {DoubleSide, Matrix4, VideoTexture} from 'three'
import {  MeshStandardMaterial, PlaneGeometry, TextureLoader, Euler, LinearFilter, RGBFormat } from 'three';
import Video from './Video'
export default function Wall(props) {
  const { viewport } = useThree();
  const group = useRef()
  const geometry = new PlaneGeometry(10,10,10)
  // const texture = new TextureLoader().load('./Textures/Diffuse.jpg')
  // const material = new MeshStandardMaterial({
  //     normalMap:texture
  // })
  // const video = useMemo(() => {
  //   const vid = document.createElement("video");
  //   vid.src = 'miscvideo.mov';
  //   vid.crossOrigin = "anonymous";
  //   vid.play();
  //   vid.volume = 0.005
  //   return vid;
  // }, []);
  // const texture = useMemo(() => {
  //   const t = new VideoTexture(video);
  //   t.flipY = false;
  //   t.minFilter = LinearFilter;
  //   t.magFilter = LinearFilter;
  //   t.format = RGBFormat;
  //   return t;
  // }, [video]);

  const plane = useRef();
  let euler = new Euler(...props.orientation)
  let transformation = new Matrix4;
  transformation.makeRotationFromEuler(euler)
  useEffect(()=>{
    plane.current.applyMatrix4(transformation)
  },[plane])

  return (
    <mesh position={props.position}>
        <planeBufferGeometry ref={plane} attach={'geometry'} args={props.size} />
        <Video />
        
    </mesh>
  )
}
