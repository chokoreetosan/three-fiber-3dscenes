
import { Canvas, useFrame, useLoader,useThree } from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef,useState, Suspense} from 'react'
import Crate from './Crate'
import Chair from './Chair';
import styled from 'styled-components';
import {PerspectiveCamera} from 'three'

const newcamera = new PerspectiveCamera( 120, 1, 1, 1000 );
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


  setDefaultCamera(newcamera)
  let crates = [];
  for(let x = -3;x < 3;x++){
    for(let y = -3;y < 3;y++){
    crates.push(
      <Crate position={[(x*3),(y*3),-5]}/>
    )
    }
  }

return (
    <Suspense fallback={null}>
    <ambientLight />
     <pointLight position={[10, 10, 10]} />
     {crates}
    {/* <Crate position={[0,0,-3]}/>  */}
         {/* <Box position={[-1.2,0,0]} />  */}
    </Suspense>


)

}

export default Scene;