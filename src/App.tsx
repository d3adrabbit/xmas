import { Suspense, useLayoutEffect, useState } from 'react';

import { Canvas, useLoader } from '@react-three/fiber';
import { Model } from './model';
import confetti from 'canvas-confetti';
import {
  ContactShadows,
  Environment,
  Loader,
  OrbitControls,
} from '@react-three/drei';
import Html from './html';

function App() {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  useLayoutEffect(() => {
    (function frame() {
      var timeLeft = animationEnd - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 6] }}>
        <Suspense fallback={null}>
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
      <Loader
        containerStyles={{ background: '#e6e4ef' }}
        dataStyles={{ color: '#417469' }}
        innerStyles={{ background: '#e6e4ef' }}
        barStyles={{ background: '#417469' }}
      />
      <div className="html">
        <Html />
      </div>
    </>
  );
}

export default App;
