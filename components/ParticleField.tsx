"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1800 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const lines = useRef<THREE.LineSegments>(null);

  const { positions, linePositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 28;
      const y = (Math.random() - 0.5) * 18;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));
    }

    // Connect nearby particles
    const lineVerts: number[] = [];
    const threshold = 2.8;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < threshold) {
          lineVerts.push(pts[i].x, pts[i].y, pts[i].z);
          lineVerts.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return { positions, linePositions: new Float32Array(lineVerts) };
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = t * 0.03;
      mesh.current.rotation.x = Math.sin(t * 0.02) * 0.08;
    }
    if (lines.current) {
      lines.current.rotation.y = t * 0.03;
      lines.current.rotation.x = Math.sin(t * 0.02) * 0.08;
    }
  });

  return (
    <>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#38bdf8"
          size={0.045}
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.08} />
      </lineSegments>
    </>
  );
}

function FloatingOrb({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.4;
      mesh.current.rotation.x = t * 0.2;
      mesh.current.rotation.z = t * 0.15;
    }
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <Particles count={900} />
        <FloatingOrb position={[-5, 2, -3]} color="#38bdf8" scale={1.2} />
        <FloatingOrb position={[5, -2, -4]} color="#a855f7" scale={0.9} />
        <FloatingOrb position={[0, 3, -5]} color="#34d399" scale={0.7} />
      </Canvas>
    </div>
  );
}
