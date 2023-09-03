import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Table = (props) => {
  const { nodes, materials } = useGLTF("/table.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Wooden Table"]}
        position={[0, 1.774, 0]}
        scale={[1, 0.015, 0.4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Tablelegs}
        position={[0, 1.727, 0]}
        scale={[0.9, 0.05, 0.045]}
      />
    </group>
  );
}

useGLTF.preload("/table.glb");