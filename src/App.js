
import { Canvas, useFrame, useLoader,useThree } from 'react-three-fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useRef,useState, Suspense} from 'react'
import Crate from './Crate'
import Chair from './Chair';
import styled from 'styled-components';
import {PerspectiveCamera} from 'three'
import Scene from './Scene'

const Main = styled.div`
width:100vw;
height:100vh;
border:2px solid black;
top:0px;
right:0px;
bottom:0px;
left:0px;
`;

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
  }


function App() {
  const [clicked, setClicked] = useState(false)



  return (
    
      <Main>
        
        {clicked ? <Canvas>
         <Scene />
           </Canvas> : <button onClick={()=>{setClicked(true)}} >asdf</button> }

      </Main>

  );
}

export default App;
