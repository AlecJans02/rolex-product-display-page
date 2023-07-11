import React, { useEffect} from "react";
import Navbar from "./Components/Navbar";
import * as THREE from 'three';
import SceneInit from './Components/threeJsScene.jsx';
import "./productThreeJs.css";

function ProductThreeJs () {

    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
    
        const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        const boxMaterial = new THREE.MeshNormalMaterial();
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    
        test.scene.add(boxMesh);
      }, []);
    
    return (
        <div>
            <Navbar />
            <div className="threeJs" id="threeDiv">
                <canvas id="myThreeJsCanvas" />
            </div>
        </div>
    )
}

export default ProductThreeJs;