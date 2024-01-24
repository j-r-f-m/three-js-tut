import * as THREE from "three";
import * as OBC from "openbim-components";

// Get the <div> element where the scene will be displayed

const container = document.getElementById('container');

// Initialize the basic components needed to use this library

const components = new OBC.Components();

components.scene = new OBC.SimpleScene(components);
components._renderer = new OBC.SimpleRenderer(components, container);
components.camera = new OBC.SimpleCamera(components);
components.raycaster = new OBC.SimpleRaycaster(components);

components.init();


// Add some elements to the scene

const scene = components.scene.get();
const grid = new OBC.SimpleGrid(components);

const boxMaterial = new THREE.MeshStandardMaterial({ color: '#6528D7' });
const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
cube.position.set(0, 1.5, 0);
scene.add(cube);

components.scene.setup();

/* const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshStandardMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 1.5, 0);
scene.add(cube);

components.meshes.push(cube);

const directionalLight = new THREE.DirectionalLight();
directionalLight.position.set(5, 10, 3);
directionalLight.intensity = 0.5;
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight();
ambientLight.intensity = 0.5;
scene.add(ambientLight); */