import * as THREE from 'three';
import { Command } from './Command';
import { Editor } from '../Editor';
declare class AddObjectCommand extends Command {
    type: string;
    parent: THREE.Object3D | undefined;
    object: THREE.Object3D | undefined;
    index: number | undefined;
    constructor(editor: Editor, object?: THREE.Object3D, parent?: THREE.Object3D, index?: number);
    execute(): void;
    undo(): void;
    update(): void;
    toJSON(): AddObjectCommand;
    fromJSON(json: AddObjectCommand): void;
}
export { AddObjectCommand };
