import * as THREE from "three";
import * as OBC from "openbim-components";

// Get the <div> element where the scene will be displayed

const container = document.getElementById('container');
console.log(container);

// Initialize the basic components needed to use this library
const components = new OBC.Components();

// minimum components needed to render a scene
components.scene = new OBC.SimpleScene(components);
components._renderer = new OBC.SimpleRenderer(components, container);
components.camera = new OBC.SimpleCamera(components);
components.raycaster = new OBC.SimpleRaycaster(components);

// Initialize the components
components.init();

// reference to the scene
const scene = components.scene.get();
// set initial camera position
components.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);
// create a grid
const grid = new OBC.SimpleGrid(components);

//three.js - Objects
// pick material 
const cubeMaterial = new THREE.MeshStandardMaterial({ color: '#6528D7' });
const greenMaterial = new THREE.MeshStandardMaterial({ color: '#BCF124' });
// pick geometry
const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
// create cube with a mesh and a geometry
const cube1 = new THREE.Mesh(boxGeometry, cubeMaterial);
const cube2 = new THREE.Mesh(boxGeometry, cubeMaterial);
const cube3 = new THREE.Mesh(boxGeometry, cubeMaterial);
const cubes = [cube1, cube2, cube3];

// set cube position
cube2.position.x = 5;
cube3.position.x = -5;
// add cubes to the scene
scene.add(cube1, cube2, cube3);

//rotate cubes
const oneDegree = Math.PI / 180;
function rotateCubes() {
    cube1.rotation.x += oneDegree;
    cube1.rotation.y += oneDegree;
    cube2.rotation.x += oneDegree;
    cube2.rotation.z += oneDegree;
    cube3.rotation.y += oneDegree;
    cube3.rotation.z += oneDegree;
}
components.renderer.onBeforeUpdate.add(rotateCubes);


let previousSelection;
window.onmousemove = () => {
    const result = components.raycaster.castRay(cubes);
    if (previousSelection) {
        previousSelection.material = cubeMaterial;
    }
    if (!result) {
        return;
    }
    result.object.material = greenMaterial;
    previousSelection = result.object;
}

components.scene.setup();