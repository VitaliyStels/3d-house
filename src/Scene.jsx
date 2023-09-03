import { useRef } from "react";
import { House } from "./House";
import { Laptop } from "./Laptop";
import { Table } from "./Table";
import { View } from "./View";

function handleCl() {
    console.log("clicked");
}

export function Scene() {
    const refHouse = useRef(null);
    const refLaptop = useRef(null);

    // function onHouseClick() {
    //     console.log("House clicked!");
    //     // Add your custom function logic here
    // }

    return (
        <>
            <ambientLight
                intensity={0.2}
            />
            <directionalLight
				color="white"
				position={[0 , 3, 4 ]}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
            <Laptop ref={refLaptop} position={[0, -0.222, 0.2]}/>
            <House ref={refHouse} position={[-1.79, -2, 2.5]}/>
            <Table position={[0, -1.99, 0.14]}/>
            <View position={[-1.5, -2, 3]}/>

        </>
    )
}