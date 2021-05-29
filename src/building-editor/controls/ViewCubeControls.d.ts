import * as THREE from 'three';
import { Config } from '../Config';
export declare class ViewCubeControls {
    static cssElement: HTMLStyleElement;
    element: HTMLDivElement;
    size: number;
    style: string;
    perspective: boolean;
    visible: boolean;
    update: () => void;
    constructor(config: Config, camera: THREE.Camera);
}
