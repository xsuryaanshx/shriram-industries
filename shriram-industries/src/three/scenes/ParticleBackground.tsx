// ─────────────────────────────────────────────
//  ParticleBackground — Three.js / R3F scene
//  Subtle floating particles for atmospheric
//  hero backgrounds. Lazy-loaded + fallback.
// ─────────────────────────────────────────────
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  color?: string;
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function Particles({ count = 120, color = '#c9a96e' }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (pseudoRandom(i * 3 + 1) - 0.5) * 20;
      pos[i * 3 + 1] = (pseudoRandom(i * 3 + 2) - 0.5) * 20;
      pos[i * 3 + 2] = (pseudoRandom(i * 3 + 3) - 0.5) * 10;
      sz[i] = pseudoRandom(i + 4) * 2 + 0.5;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * 0.03;
    mesh.current.rotation.y = t;
    mesh.current.rotation.x = t * 0.5;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </points>
  );
}

interface ParticleBackgroundProps {
  count?: number;
  color?: string;
  className?: string;
}

export default function ParticleBackground({
  count = 120,
  color = '#c9a96e',
  className = 'absolute inset-0 z-0',
}: ParticleBackgroundProps) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Particles count={count} color={color} />
      </Canvas>
    </div>
  );
}
