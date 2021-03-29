
import { Canvas, useFrame, useLoader,useThree,useResource,extend } from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef,useState, Suspense,useEffect} from 'react'
import Crate from './Crate'
import Plane from './Plane'
import styled from 'styled-components';
import {PerspectiveCamera, WebGLRenderer} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import {FlyControls} from 'three/examples/jsm/controls/FlyControls'
import {FlyControls} from '@react-three/drei'
// let newcamera = new PerspectiveCamera( 300, 1, 1, 1000 );


// extend({OrbitControls});
// extend({FlyControls})
const Scene = () => {
    let {
    gl: {domElement}   ,                        // WebGL renderer
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
  const cameraref = useRef();
  const controlsref= useRef();
  let crates = [];
  for(let x = -1;x < 3;x++){
    for(let y = -1;y < 3;y++){
    crates.push(
      <Crate key={x + y*6} position={[(x*4),(y*4),-10]}/>
    )
    }
  }
  useEffect(() => void setDefaultCamera(cameraref.current), [])
  function Camera(props) {
    return <perspectiveCamera ref={cameraref} {...props} far={200}/>
  }
return (
  <>
  <Camera position={[0,0,10]}/>
  <FlyControls 
  ref={controlsref}
   autoForward={false}
        dragToLook={true}
        movementSpeed={5.0}
        rollSpeed={0.5} 
         /> 
    <Suspense fallback={null}>
    <ambientLight />
     <pointLight position={[10, 10, 10]} />
     <Plane position={[0,-7,0]}/>
     {crates}
    </Suspense>
</>

)

}

export default Scene;