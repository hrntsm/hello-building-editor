import { Editor } from '../Editor';
import { Command } from './Command';
declare class SetUuidCommand extends Command {
    type: string;
    oldUuid?: string;
    newUuid?: string;
    object: any;
    constructor(editor: Editor, object: THREE.Object3D, newUuid: string);
    execute(): void;
    undo(): void;
    update(): void;
    toJSON(): SetUuidCommand;
    fromJSON(json: SetUuidCommand): void;
}
export { SetUuidCommand };
