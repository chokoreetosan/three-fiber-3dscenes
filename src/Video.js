
import React, { useEffect, useRef,useState, useMemo } from 'react'
import {useThree} from 'react-three-fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import {DoubleSide, Matrix4, VideoTexture} from 'three'
import {  MeshStandardMaterial, PlaneGeometry, TextureLoader, Euler, LinearFilter, RGBFormat } from 'three';
const Video = (props) => {
    const video = useMemo(() => {
        const vid = document.createElement("video");
        vid.src = 'miscvideo.mov';
        vid.crossOrigin = "anonymous";
        vid.play();
        vid.volume = 0.005
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
    return (
        <meshBasicMaterial map={texture} skinning={true} side={DoubleSide}/>
    )
}

export default Video;