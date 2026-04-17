import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

/**
 * FloatingGeometry — Animated 3D shapes for the hero background.
 */
function AnimatedIcosahedron() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh ref={ref} position={[2.5, 0.5, -2]} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.3}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorusKnot() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.08;
      ref.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={ref} position={[-3, -1, -3]} scale={0.8}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <MeshDistortMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.2}
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function AnimatedOctahedron() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={ref} position={[-2, 2, -4]} scale={0.6}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.25}
          distort={0.4}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

function AnimatedSphere() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={ref} position={[3.5, -2, -5]} scale={1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.15}
          distort={0.5}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      <AnimatedIcosahedron />
      <AnimatedTorusKnot />
      <AnimatedOctahedron />
      <AnimatedSphere />
    </group>
  );
}
