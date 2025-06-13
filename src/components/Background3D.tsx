
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === 'dark' ? "#60A5FA" : "#3B82F6"}
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === 'dark' ? 0.8 : 0.6}
      />
    </Points>
  );
};

const FloatingCube = ({ position, color, delay = 0 }: { 
  position: [number, number, number]; 
  color: string;
  delay?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 + delay;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + delay;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.8;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={theme === 'dark' ? 0.4 : 0.25}
        wireframe
      />
    </mesh>
  );
};

const Background3D = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={theme === 'dark' ? 0.2 : 0.1} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 0.8 : 0.5} />
        <pointLight position={[-10, -10, -10]} intensity={theme === 'dark' ? 0.3 : 0.2} color="#8B5CF6" />
        <ParticleField />
        <FloatingCube position={[-4, 2, -6]} color="#3B82F6" delay={0} />
        <FloatingCube position={[4, -2, -4]} color="#8B5CF6" delay={1} />
        <FloatingCube position={[0, 4, -8]} color="#06B6D4" delay={2} />
        <FloatingCube position={[-2, -3, -5]} color="#22D3EE" delay={3} />
        <FloatingCube position={[3, 1, -7]} color="#F59E0B" delay={4} />
      </Canvas>
    </div>
  );
};

export default Background3D;
