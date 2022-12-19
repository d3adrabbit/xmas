import { Suspense, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { Model } from './model';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 6] }}>
      <Suspense fallback={null}>
        <Model />
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
  );
}

export default App;
