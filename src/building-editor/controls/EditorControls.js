import * as THREE from 'three';
export class EditorControls extends THREE.EventDispatcher {
    constructor() {
        super();
        this.enabled = true;
        this.updateEvent = { type: 'update' };
    }
    update() {
        if (!this.enabled)
            return;
        this.dispatchEvent(this.updateEvent);
    }
}
