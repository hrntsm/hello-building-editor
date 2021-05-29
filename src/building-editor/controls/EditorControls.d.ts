import * as THREE from 'three';
export declare class EditorControls extends THREE.EventDispatcher {
    enabled: boolean;
    updateEvent: {
        type: string;
    };
    constructor();
    update(): void;
}
