import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const View = (props) => {
  const { nodes, materials } = useGLTF("/view.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sakura_tree001.geometry}
        material={nodes.sakura_tree001.material}
        position={[5.735, -3.728, -6.117]}
        rotation={[Math.PI / 2, 0, -1.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sakura_tree.geometry}
        material={nodes.sakura_tree.material}
        position={[-0.409, -3.728, -6.366]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/view.glb");