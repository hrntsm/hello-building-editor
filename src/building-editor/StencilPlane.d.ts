import * as THREE from 'three';
export declare class StencilPlane {
    plane: THREE.Plane;
    stencilPlane: THREE.Mesh<THREE.PlaneBufferGeometry, THREE.MeshStandardMaterial>;
    constructor(plane: THREE.Plane);
    update(): void;
}
