import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// ✨ Stars Component
const Stars = () => {
  const pointsRef = useRef();

  // Generate random star positions
  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 1000; i++) {
      positions.push(
        (Math.random() - 0.5) * 50, // X
        (Math.random() - 0.5) * 50, // Y
        (Math.random() - 0.5) * 50  // Z
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005; // Slow star rotation
    }
  });

  return (
    <Points ref={pointsRef} scale={2}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          count={starPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial color="white" size={0.03} transparent />
    </Points>
  );
};

// 🌠 Shooting Star Component
const ShootingStar = () => {
  const starRef = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    starRef.current.position.x = Math.sin(t) * 10;
    starRef.current.position.y = Math.cos(t) * 10;
    starRef.current.position.z -= 0.08;
    if (starRef.current.position.z < -10) {
      starRef.current.position.z = 10;
    }
  });

  return (
    <mesh ref={starRef} position={[0, 3, 10]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

// 🌌 Full-Screen Background
const ThreeBackground = () => {
  return (
    <Canvas
      className="absolute top-0 left-0 w-full h-screen z-[-1]" // Make it full-screen
      camera={{ position: [0, 0, 10] }}
    >
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.3} />
      <Stars />
      <ShootingStar />
    </Canvas>
  );
};

export default ThreeBackground;
