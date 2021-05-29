import { Command } from './Command';
import * as THREE from 'three';
import { Editor } from '../Editor';
declare class SetPositionCommand extends Command {
    type: string;
    object: THREE.Object3D;
    objectUuid: string;
    newPosition: any;
    oldPosition: any;
    constructor(editor: Editor, object: THREE.Object3D, newPosition: THREE.Vector3, optionalOldPosition?: THREE.Vector3);
    execute(): void;
    undo(): void;
    update(command: SetPositionCommand): void;
    toJSON(): SetPositionCommand;
    fromJSON(json: SetPositionCommand): void;
}
export { SetPositionCommand };
