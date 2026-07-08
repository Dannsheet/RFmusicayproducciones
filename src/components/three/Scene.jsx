import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Scene = ({ 
  children, 
  camera = { position: [0, 0, 5], fov: 75 },
  className = '',
  style = {}
}) => {
  return (
    <div className={className} style={{ width: '100%', height: '100%', ...style }}>
      <Canvas
        camera={camera}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
