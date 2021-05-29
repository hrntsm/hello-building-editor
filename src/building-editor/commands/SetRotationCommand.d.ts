import { Command } from './Command';
import * as THREE from 'three';
import { Editor } from '../Editor';
declare class SetRotationCommand extends Command {
    type: string;
    object: THREE.Object3D;
    objectUuid: string;
    oldRotation: any;
    newRotation: any;
    constructor(editor: Editor, object: THREE.Object3D, newRotation: THREE.Euler, optionalOldRotation: THREE.Euler);
    execute(): void;
    undo(): void;
    update(command: SetRotationCommand): void;
    toJSON(): SetRotationCommand;
    fromJSON(json: SetRotationCommand): void;
}
export { SetRotationCommand };
