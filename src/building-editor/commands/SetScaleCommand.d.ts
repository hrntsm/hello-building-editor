import { Command } from './Command';
import * as THREE from 'three';
import { Editor } from '../Editor';
declare class SetScaleCommand extends Command {
    type: string;
    object: THREE.Object3D;
    objectUuid: string;
    oldScale: any;
    newScale: any;
    constructor(editor: Editor, object: THREE.Object3D, newScale: THREE.Vector3, optionalOldScale?: THREE.Vector3);
    execute(): void;
    undo(): void;
    update(command: SetScaleCommand): void;
    toJSON(): SetScaleCommand;
    fromJSON(json: SetScaleCommand): void;
}
export { SetScaleCommand };
