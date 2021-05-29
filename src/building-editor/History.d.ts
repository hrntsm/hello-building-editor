import { Editor } from './Editor';
import { Config } from './Config';
import { Command } from './commands/Command';
export interface HistoryJson {
    undos: Command[];
    redos: Command[];
}
export declare class History {
    editor: Editor;
    undos: Command[];
    redos: Command[];
    lastCmdTime: Date;
    idCounter: number;
    config: Config;
    constructor(editor: Editor);
    execute(cmd: Command): void;
    undo(): Command | undefined;
    redo(): Command | undefined;
    toJSON(): HistoryJson;
    fromJSON(json: HistoryJson): void;
    clear(): void;
    goToState(id: number): void;
    enableSerialization(id: number): void;
}
