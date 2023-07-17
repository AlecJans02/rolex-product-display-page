import React, { useEffect, Suspense, useRef} from "react";
import Navbar from "./Components/Navbar";
import * as THREE from 'three';
import SceneInit from './Components/threeJsScene.jsx';
import "./productThreeJs.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function ProductThreeJs () {

    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
    
        const loader = new GLTFLoader();
        let loadedModel;

        loader.load(`./assets/rolexmodel/scene.gltf`, function(gltf) {
            gltf.scene.rotation.y = Math.PI / 8;
            gltf.scene.position.y = 3;
            gltf.scene.scale.set(6, 6, 6);
            let watch = gltf.scene;
            //loadedModel = gltf.scene;
            test.scene.add(watch);
        })   

        // const animate = () => {
        //     if(loadedModel) {
        //         loadedModel.scene.scale.set(6, 6, 6);
        //         loadedModel.scene.rotation.x += 0.01;
        //         loadedModel.scene.rotation.y += 0.01;
        //         loadedModel.scene.rotation.z += 0.01;
        //     }
        // }
            
        //const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        //const boxMaterial = new THREE.MeshNormalMaterial();
        //const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    
        //test.scene.add(boxMesh);
        });

       
    
    return (
        <div>
            <Navbar />
            <div className="pageTitle">
                    <h1 className="title">3D MOVEABLE MODEL</h1>
                </div>
            <div className="threeJs" id="threeDiv">
                 <canvas id="myThreeJsCanvas" />  
            </div>
        </div>
    )
}

export default ProductThreeJs;