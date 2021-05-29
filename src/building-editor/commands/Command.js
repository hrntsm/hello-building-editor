export class Command {
    constructor(editor) {
        this.editor = editor;
        this.id = -1;
        this.name = '';
        this.inMemory = false;
        this.updatable = false;
    }
    toJSON() {
        const output = {
            editor: undefined,
            type: this.type,
            id: this.id,
            name: this.name,
            execute: this.execute,
            undo: this.undo,
            update: this.update,
            toJSON: this.toJSON,
            fromJSON: this.fromJSON,
        };
        return output;
    }
    fromJSON(json) {
        this.inMemory = true;
        this.type = json.type;
        this.id = json.id;
        this.name = json.name;
    }
}
