import * as THREE from 'three';
import { ColladaExporter } from 'three/examples/jsm/exporters/ColladaExporter';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter';
import { PLYExporter } from 'three/examples/jsm/exporters/PLYExporter';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter';
export class Exporter {
    constructor(editor) {
        this.editor = editor;
        this.link = document.createElement('a');
        this.link.style.display = 'none';
    }
    parseNumber(key, value) {
        const precision = this.editor.config.getKey('exportPrecision');
        return typeof value === 'number' ? parseFloat(value.toFixed(precision)) : value;
    }
    // Export Geometry
    exportGeometry() {
        const object = this.editor.selected;
        if (object === null) {
            alert('No object selected.');
            return;
        }
        if (!(object instanceof THREE.Mesh))
            return;
        const geometry = object.geometry;
        if (geometry === undefined) {
            alert("The selected object doesn't have geometry.");
            return;
        }
        let output = geometry.toJSON();
        try {
            output = JSON.stringify(output, this.parseNumber, '\t');
            output = output.replace(/[\n\t]+([\d.e\-[\]]+)/g, '$1');
        }
        catch (e) {
            output = JSON.stringify(output);
        }
        this.saveString(output, 'geometry.json');
    }
    // Export Object
    exportObject() {
        const object = this.editor.selected;
        if (object === null) {
            alert('No object selected');
            return;
        }
        let output = object.toJSON();
        try {
            output = JSON.stringify(output, this.parseNumber, '\t');
            output = output.replace(/[\n\t]+([\d.e\-[\]]+)/g, '$1');
        }
        catch (e) {
            output = JSON.stringify(output);
        }
        this.saveString(output, 'model.json');
    }
    // Export Scene
    exportScene() {
        let output = this.editor.scene.toJSON();
        try {
            output = JSON.stringify(output, this.parseNumber, '\t');
            output = output.replace(/[\n\t]+([\d.e\-[\]]+)/g, '$1');
        }
        catch (e) {
            output = JSON.stringify(output);
        }
        this.saveString(output, 'scene.json');
    }
    // Export DAE
    exportDAE() {
        const scope = this;
        const exporter = new ColladaExporter();
        exporter.parse(scope.editor.scene, (result) => {
            scope.saveString(result.data, 'scene.dae');
        }, {});
    }
    // Export GLB
    exportGLB() {
        const scope = this;
        const exporter = new GLTFExporter();
        exporter.parse(scope.editor.scene, (result) => {
            scope.saveArrayBuffer(result, 'scene.glb');
            // forceIndices: true, forcePowerOfTwoTextures: true
            // to allow compatibility with facebook
        }, { binary: true, forceIndices: true, forcePowerOfTwoTextures: true });
    }
    // Export GLTF
    exportGLTF() {
        const scope = this;
        const exporter = new GLTFExporter();
        exporter.parse(scope.editor.scene, (result) => {
            scope.saveString(JSON.stringify(result, null, 2), 'scene.gltf');
        }, {});
    }
    // Export OBJ
    exportOBJ() {
        const scope = this;
        const object = scope.editor.selected;
        if (object === null) {
            alert('No object selected.');
            return;
        }
        const exporter = new OBJExporter();
        scope.saveString(exporter.parse(object), 'model.obj');
    }
    // Export PLY (ASCII)
    exportPLY() {
        const scope = this;
        const exporter = new PLYExporter();
        exporter.parse(scope.editor.scene, (result) => {
            scope.saveArrayBuffer(result, 'model.ply');
        }, {});
    }
    // Export PLY (Binary)
    exportBinaryPLY() {
        const scope = this;
        const exporter = new PLYExporter();
        exporter.parse(scope.editor.scene, (result) => {
            scope.saveArrayBuffer(result, 'model-binary.ply');
        }, { binary: true });
    }
    // Export STL (ASCII)
    exportSTL() {
        const scope = this;
        const exporter = new STLExporter();
        scope.saveString(exporter.parse(scope.editor.scene), 'model.stl');
    }
    // Export STL (Binary)
    exportBinarySTL() {
        const scope = this;
        const exporter = new STLExporter();
        scope.saveArrayBuffer(exporter.parse(scope.editor.scene, { binary: true }), 'model-binary.stl');
    }
    save(blob, filename) {
        this.link.href = URL.createObjectURL(blob);
        this.link.download = filename || 'data.json';
        this.link.dispatchEvent(new MouseEvent('click'));
        // URL.revokeObjectURL( url ); breaks Firefox...
    }
    saveArrayBuffer(buffer, filename) {
        this.save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
    }
    saveString(text, filename) {
        this.save(new Blob([text], { type: 'text/plain' }), filename);
    }
}
