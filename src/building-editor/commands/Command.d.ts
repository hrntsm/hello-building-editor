import { Editor } from '../Editor';
export declare abstract class Command {
    editor: Editor;
    id: number;
    name: string;
    inMemory?: boolean;
    updatable?: boolean;
    json?: Command;
    abstract type: string;
    abstract execute(): void;
    abstract undo(): void;
    abstract update(command: Command): void;
    constructor(editor: Editor);
    toJSON(): Command;
    fromJSON(json: Command): void;
}
