import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Ground } from "./Ground";
import { OrbitControls } from "@react-three/drei";

export function FiberContainer() {
    
    return (
        <Canvas camera={{ position: [0, 11, 44], fov: 70 }} shadows>
            <Scene />
            <Ground />
            <OrbitControls minDistance={0.4} maxDistance={1.4} />
        </Canvas>
    );
}

export default FiberContainer;