import React, { use } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload ,useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth=useGLTF('./planet/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}/>
    <directionalLight
      position={[0, 10, 5]}/>
       <primitive
   object={earth.scene}
    scale={1.5}
    dispose={null}
      />
    </mesh>
  
  )
}

const EarthCanvas = () => {
return (
    <Canvas
    frameloop='demand'
      shadows
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
        rotateSpeed={-1}
         enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )

}
useGLTF.preload('./planet/scene.gltf')

export default EarthCanvas