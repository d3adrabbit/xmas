import { Suspense, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { Model } from './model';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import Html from './html';

function App() {
  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 6] }}>
        <Suspense fallback={'loading...'}>
          <Model />
          <ambientLight intensity={0.35} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={[512, 512]}
            castShadow
          />
          <Environment preset="dawn" />
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={10}
            blur={4}
            far={4}
            color="red"
          />
          <OrbitControls
            enableZoom={false}
            autoRotate
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2 - 0.5}
          />
        </Suspense>
      </Canvas>
      <div className="html">
        <Html />
      </div>
    </>
  );
}

export default App;
