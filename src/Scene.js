
import { Canvas, useFrame, useLoader,useThree } from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef,useState, Suspense} from 'react'
import  gLTF from './Barrel.glb'
import Barrel from './Barrel'
import Crate from './Crate'
import Chair from './Chair';
import styled from 'styled-components';
import {PerspectiveCamera} from 'three'


const Scene = () => {
    const {
    gl,                           // WebGL renderer
    scene,                        // Default scene
    camera,                       // Default camera
    raycaster,                    // Default raycaster
    size,                         // Bounds of the view (which stretches 100% and auto-adjusts)
    aspect,                       // Aspect ratio (size.width / size.height)
    mouse,                        // Current, centered, normalized 2D mouse coordinates
                      // Internal raycaster instance
    clock,                        // THREE.Clock (useful for useFrame deltas)
    invalidate,
    intersect,
    setDefaultCamera,
    viewport,
    forceResize,
  } = useThree()

  const newcamera = new PerspectiveCamera( 45, 1, 1, 1000 );
  scene.add( newcamera );
return (
    <Suspense fallback={null}>
    <ambientLight />
     <pointLight position={[10, 10, 10]} />
    <Crate position={[0,0,2]}/> 
         {/* <Box position={[-1.2,0,0]} />  */}
    </Suspense>


)

}

export default Scene;