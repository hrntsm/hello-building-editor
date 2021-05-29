import { Editor } from '../Editor';
import { Command } from './Command';
declare class SetValueCommand extends Command {
    type: string;
    oldValue: any;
    newValue: any;
    objectUuid?: string;
    attributeName: string;
    object: THREE.Object3D | undefined;
    constructor(editor: Editor, object: THREE.Object3D, attributeName: string, newValue: any);
    execute(): void;
    undo(): void;
    update(cmd: SetValueCommand): void;
    toJSON(): SetValueCommand;
    fromJSON(json: SetValueCommand): void;
}
export { SetValueCommand };
