import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Laptop(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/laptop4.glb");
  const { actions } = useAnimations(animations, group);
  var isPlaying = false
  

  // function openLaptop() {
    
  //   console.log('started')
  //   if (requestAnimationFrame(openLaptop) <= duration) {
  //     actions["TtopAction"].paused = false;
  //     actions["TtopAction"].play();

  //   }
  //   else {
  //     actions["TtopAction"].paused = true;
  //     return
  //   }

  // }


  function startAnimation() {
    console.log(animations)
    if (isPlaying === true) {
      actions["Cube.057Action"].paused = true;
      actions["TtopAction.001"].paused = true;
      isPlaying = false
    }

    else {
      actions["Cube.057Action"].paused = false;
      actions["TtopAction.001"].paused = false;
      actions["Cube.057Action"].play();
      actions["TtopAction.001"].play();
      isPlaying = true
    }
  }

  return (
<group ref={group} {...props} dispose={null} onClick={startAnimation}>
      <group name="Scene">
        <mesh
          name="Screen"
          castShadow
          
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          position={[-0.021, 0.052, -0.114]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.24, 0.186, 0.001]}
        />
        <mesh
          name="Ttop"
          castShadow
          receiveShadow
          geometry={nodes.Ttop.geometry}
          material={materials["laptop main color"]}
          position={[0.026, 0.05, -0.116]}
          scale={[0.25, 0.005, 0.2]}
        />
        <mesh
          name="Torus"
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={materials.Screen}
          position={[0.199, 0.051, -0.068]}
          scale={[0.009, 0.003, 0.009]}
        />
        <group
          name="bottom"
          receiveShadow
          castShadow
          position={[0.002, 0.037, 0.084]}
          scale={[0.25, 0.015, 0.2]}
        >
          <mesh
            name="Cube005_1"
            castShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials["laptop main color"]}
          />
          <mesh
            name="Cube005_2"
            castShadow
            geometry={nodes.Cube005_2.geometry}
            material={nodes.Cube005_2.material}
          />
        </group>
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube023"
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube031"
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube032"
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube033"
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube035"
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube036"
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube039"
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube040"
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube041"
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials.MacKeyButton}
          position={[-0.225, 0.05, -0.082]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube042"
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube043"
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube044"
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube045"
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube046"
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube047"
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube048"
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube049"
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube050"
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube051"
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials.MacKeyButton}
          position={[-0.225, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube052"
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube053"
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube054"
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube055"
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube056"
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Spacebar"
          castShadow
          receiveShadow
          geometry={nodes.Spacebar.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube061"
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube062"
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube063"
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
        <mesh
          name="Cube065"
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials.MacKeyButton}
          position={[-0.192, 0.05, -0.067]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.013, -0.001, -0.015]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/laptop4.glb");