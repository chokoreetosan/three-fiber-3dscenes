
import { Canvas, useFrame, useLoader,useThree,useResource,extend } from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef,useState, Suspense} from 'react'
import Crate from './Crate'
import Chair from './Chair';
import styled from 'styled-components';
import {PerspectiveCamera, WebGLRenderer} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let newcamera = new PerspectiveCamera( 120, 1, 1, 1000 );
let newrenderer = new WebGLRenderer();

extend({OrbitControls});
const Scene = () => {
    let {
    gl:{domElement},                           // WebGL renderer
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

  let crates = [];
  for(let x = -3;x < 3;x++){
    for(let y = -3;y < 3;y++){
    crates.push(
      <Crate position={[(x*3),(y*3),-5]}/>
    )
    }
  }
  // setDefaultCamera(newcamera)
  const CameraControls = () => {

    domElement.appendChild(newrenderer.domElement)
    const controls = useRef();
    useFrame((state) => controls.current.update())
    return <orbitControls ref={controls} args={[camera,domElement]} />
  }

return (
  <>
  <CameraControls />

    <Suspense fallback={null}>
    <ambientLight />
     <pointLight position={[10, 10, 10]} />
     
     {crates}
    {/* <Crate position={[0,0,-3]}/>  */}
         {/* <Box position={[-1.2,0,0]} />  */}
    </Suspense>
</>

)

}

export default Scene;