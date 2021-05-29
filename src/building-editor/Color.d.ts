export interface Color {
    'selectionBox': string | number | THREE.Color | undefined;
    'picker': string | number | THREE.Color | undefined;
    'scene/background': string | number | THREE.Color | undefined;
    'gridHelper': number | THREE.Color | undefined;
    'planeHelper': number | undefined;
    'stencilPlane': number | undefined;
}
export declare const color: Color;
