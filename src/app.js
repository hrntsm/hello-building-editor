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
    editor.render();
};

init();
editor.orbitControls.addEventListener("change", onChange);