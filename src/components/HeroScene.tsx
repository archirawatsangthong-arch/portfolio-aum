"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Points } from "three";

function SpatialNode({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<Group>(null);
  const points = useRef<Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(72 * 3);
    for (let index = 0; index < 72; index++) {
      const angle = index * 2.399963;
      const radius = 1.8 + (index % 7) * 0.16;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = ((index % 12) - 5.5) * 0.32;
      values[index * 3 + 2] = Math.sin(angle) * radius;
    }
    return values;
  }, []);

  useFrame((state, delta) => {
    if (!group.current || !points.current) return;
    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.28;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.035;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.035;
    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.08;
      points.current.rotation.y -= delta * 0.025;
    }
  });

  return (
    <group ref={group} position={[1.8, 0, 0]}>
      {/* โครงตาข่ายลูกบอล 3D (เปลี่ยนเป็น Cosmic Cyan) */}
      <mesh>
        <icosahedronGeometry args={[1.65, 1]} />
        <meshStandardMaterial color="#38bdf8" wireframe transparent opacity={0.45} />
      </mesh>

      {/* แกนชั้นในแบบสะท้อนแสง */}
      <mesh scale={0.82}>
        <icosahedronGeometry args={[1.65, 1]} />
        <meshStandardMaterial color="#e0f2fe" transparent opacity={0.05} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* จุดละอองอนุภาครอบลูกบอล (Particles) */}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#38bdf8" size={0.035} transparent opacity={0.5} sizeAttenuation />
      </points>
    </group>
  );
}

export default function HeroScene({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="hero-canvas absolute inset-0 z-0 opacity-40" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.7} />
        {/* ลำแสงส่องกระทบ (เปลี่ยนเป็นสีฟ้านีออน) */}
        <directionalLight position={[3, 4, 5]} intensity={2} color="#38bdf8" />
        <SpatialNode reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}