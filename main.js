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
// pick material and geometry
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#6528D7' });
const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
// create new cube
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
cube.position.set(0, 1.5, 0)
// add the cube to the scene;
scene.add(cube);
// set light
components.scene.setup();

