import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei"

export const House = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF("/room3.glb");
    return (
        <group {...props} dispose={null}>
        <group position={[0, 1.702, 0]} scale={[4, 1.65, 3]}>
          <mesh
            castShadow
            
            geometry={nodes.Cube003.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            
            geometry={nodes.Cube003_1.geometry}
            material={nodes.Cube003_1.material}
          />
          <mesh
            castShadow
            
            geometry={nodes.Cube003_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    );
});

useGLTF.preload("/room3.glb");