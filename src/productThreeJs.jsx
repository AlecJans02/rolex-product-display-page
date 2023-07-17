import React, { useEffect, Suspense, useRef} from "react";
import Navbar from "./Components/Navbar";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import SceneInit from './Components/threeJsScene.jsx';
import "./productThreeJs.css";
//import GLTFLoader from "three-gltf-loader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import rolexmodelgltf from "./assets/scene.gltf";
//import rolexmodelgltf from "./assets/scene.gltf";
//import watchmodel from "./assets/scene.gltf";
//import rolexfile from "./assets/rolexmodel/scene.gltf";

function ProductThreeJs () {

    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
    
        const loader = new GLTFLoader();

        loader.load(`./assets/rolexmodel/scene.gltf`, function(gltf) {
            let watch = gltf.scene
            test.scene.add(watch);
        })   
            
        //const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        //const boxMaterial = new THREE.MeshNormalMaterial();
        //const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    
        //test.scene.add(boxMesh);

        // let loadedModel;
        //const glftLoader = new GLTFLoader();
        //glftLoader.load("./public/assets/rolexmodel/scene.gltf", (gltfScene) => {
            // loadedModel = gltfScene;
            // console.log(loadedModel);

            // gltfScene.scene.rotation.y = Math.PI / 8;
            // gltfScene.scene.position.y = 3;
            // gltfScene.scene.scale.set(10, 10, 10);
            //test.scene.add( gltfScene.scene );
        });

        // const animate = () => {
        //     if (loadedModel) {
        //         loadedModel.scene.rotation.x += 0.01;
        //         loadedModel.scene.rotation.y += 0.01;
        //         loadedModel.scene.rotation.z += 0.01;
        //     }
        // requestAnimationFrame(animate);
        // };
        // animate();
      //}, []);
    
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