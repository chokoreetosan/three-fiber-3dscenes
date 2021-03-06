
import { Canvas, useFrame, useLoader,useThree,useResource,extend } from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef,useState, Suspense,useEffect} from 'react'
import Crate from './Crate'
import Chair from './Chair';
import styled from 'styled-components';
import {PerspectiveCamera, WebGLRenderer} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let newcamera = new PerspectiveCamera( 120, 1, 1, 1000 );


extend({OrbitControls});
// extend({PerspectiveCamera})
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
  for(let x = -3;x < 3;x++){
    for(let y = -3;y < 3;y++){
    crates.push(
      <Crate position={[(x*3),(y*3),-5]}/>
    )
    }
  }
  useEffect(() => void setDefaultCamera(cameraref.current), [])
  function Camera(props) {
    return <perspectiveCamera ref={cameraref} {...props} />
  }
return (
  <>
  <Camera position={[0,0,15]}/>
  <orbitControls ref={controlsref} args={[camera,domElement]}/>
    <Suspense fallback={null}>
    <ambientLight />
     <pointLight position={[10, 10, 10]} />
     {crates}
    </Suspense>
</>

)

}

export default Scene;