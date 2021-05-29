import * as THREE from 'three';
import { Command } from './Command';
import { Editor } from '../Editor';
declare class RemoveObjectCommand extends Command {
    type: string;
    parent: THREE.Object3D | undefined;
    index: number | undefined;
    object: THREE.Object3D | undefined;
    parentUuid: string | undefined;
    constructor(editor: Editor, object?: THREE.Object3D);
    execute(): void;
    undo(): void;
    update(): void;
    toJSON(): RemoveObjectCommand;
    fromJSON(json: RemoveObjectCommand): void;
}
export { RemoveObjectCommand };
