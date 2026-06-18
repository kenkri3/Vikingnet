import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, colors, linePositions } = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const posVectors: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 4 + Math.random() * 6;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      posVectors.push(new THREE.Vector3(x, y, z));

      const t = Math.random();
      colors[i * 3] = 0.23 + t * 0.14;
      colors[i * 3 + 1] = 0.51 + t * 0.38;
      colors[i * 3 + 2] = 0.96;
    }

    // Connection lines
    const lines: number[] = [];
    for (let i = 0; i < posVectors.length; i += 10) {
      for (let j = i + 10; j < posVectors.length; j += 10) {
        if (posVectors[i].distanceTo(posVectors[j]) < 2.5) {
          lines.push(posVectors[i].x, posVectors[i].y, posVectors[i].z);
          lines.push(posVectors[j].x, posVectors[j].y, posVectors[j].z);
        }
      }
    }

    return { positions, colors, linePositions: new Float32Array(lines) };
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.01;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.03;
      linesRef.current.rotation.x += delta * 0.01;
    }
  });

  const posAttr = useMemo(() => new THREE.BufferAttribute(positions, 3), [positions]);
  const colorAttr = useMemo(() => new THREE.BufferAttribute(colors, 3), [colors]);
  const lineAttr = useMemo(() => new THREE.BufferAttribute(linePositions, 3), [linePositions]);

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <primitive object={posAttr} attach="attributes-position" />
          <primitive object={colorAttr} attach="attributes-color" />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <primitive object={lineAttr} attach="attributes-position" />
        </bufferGeometry>
        <lineBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

function FloatingStars() {
  const groupRef = useRef<THREE.Group>(null);

  const stars = useMemo(() => {
    const arr: { x: number; y: number; z: number; speed: number; size: number }[] = [];
    for (let i = 0; i < 50; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 30,
        z: (Math.random() - 0.5) * 20,
        speed: 0.2 + Math.random() * 0.5,
        size: 0.03 + Math.random() * 0.05,
      });
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      child.position.y += stars[i].speed * delta;
      if (child.position.y > 15) {
        child.position.y = -15;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {stars.map((star, i) => (
        <mesh key={i} position={[star.x, star.y, star.z]}>
          <sphereGeometry args={[star.size, 8, 8]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ParticleBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <ParticleSphere />
        <FloatingStars />
      </Canvas>
    </div>
  );
}
