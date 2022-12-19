import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Model } from './model';
import { Environment } from '@react-three/drei';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <Environment preset="dawn" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
