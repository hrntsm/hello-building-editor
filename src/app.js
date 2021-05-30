import * as THREE from "three";
import { Editor } from "./building-editor/index.js";
const editor = new Editor();
document.body.appendChild(editor.renderer.domElement);

const onChange = () => {
    editor.render();
};

const init = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    editor.renderer.setPixelRatio(window.devicePixelRatio);
    editor.renderer.setSize(width, height);

    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial();
    const box = new THREE.Mesh(geometry, material);
    editor.addObject(box);
    editor.select(box);

    editor.render();
};

init();
editor.orbitControls.addEventListener("change", onChange);