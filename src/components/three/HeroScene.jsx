import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import ParticleField from './ParticleField';

/**
 * Elegant floating torus — minimal, translucent, professional.
 */
function FloatingTorus() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.06;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.5}>
      <mesh ref={ref} position={[3.5, 0.5, -3]} scale={1.2}>
        <torusGeometry args={[1, 0.15, 32, 64]} />
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.08}
          roughness={0.6}
          metalness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

/**
 * Small floating ring - accent element
 */
function SmallRing() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.1;
      ref.current.rotation.x = Math.PI * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.8}>
      <mesh ref={ref} position={[-3.5, -1.5, -4]} scale={0.6}>
        <torusGeometry args={[1, 0.08, 24, 48]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.06}
          roughness={0.5}
          metalness={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

/**
 * HeroScene — Clean professional 3D with subtle torus rings + particles.
 */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <FloatingTorus />
        <SmallRing />
        <ParticleField count={400} />
      </Suspense>
    </Canvas>
  );
}
