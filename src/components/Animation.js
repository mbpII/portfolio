import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Animation() {
  const meshRef = useRef();

  useFrame((_state, delta) => {
    meshRef.current.rotation.y += 0.01 * delta;
  });

  return (
    <mesh ref={meshRef} rotation={[90, 0, 20]} scale={3.5}>
      <sphereGeometry attach="geometry" args={[0.7, 30, 30]} />
      <meshLambertMaterial attach="material" color="gray" />
    </mesh>
  );
}

export default Animation;
