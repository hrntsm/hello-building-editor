import { Command } from './Command';
import { Editor } from '../Editor';
declare class SetSceneCommand extends Command {
    type: string;
    cmdArray: Command[];
    cmds?: Command[];
    constructor(editor: Editor, scene?: THREE.Scene);
    execute(): void;
    undo(): void;
    update(): void;
    toJSON(): SetSceneCommand;
    fromJSON(json: SetSceneCommand): void;
}
export { SetSceneCommand };
