import * as THREE from 'three';
export interface BuildingEditorSettings {
    renderer: THREE.WebGLRenderer;
    camera: THREE.Camera;
    scene: THREE.Scene;
    gridHelper: THREE.GridHelper;
    axesHelper: THREE.AxesHelper;
    planeHelper: THREE.PlaneHelper;
    initialObjects: THREE.Object3D[];
    initialHelpers: THREE.Object3D[];
}
export declare type EditorSettings = Partial<BuildingEditorSettings>;
export declare class Settings {
    renderer: THREE.WebGLRenderer;
    camera: THREE.Camera;
    scene: THREE.Scene;
    gridHelper: THREE.GridHelper;
    axesHelper: THREE.AxesHelper;
    planeHelper: THREE.PlaneHelper;
    initialObjects: THREE.Object3D[];
    initialHelpers: THREE.Object3D[];
    constructor();
}
