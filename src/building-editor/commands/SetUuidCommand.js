import { Command } from './Command';
class SetUuidCommand extends Command {
    constructor(editor, object, newUuid) {
        super(editor);
        this.type = 'SetUuidCommand';
        this.name = 'Update UUID';
        this.object = object;
        this.oldUuid = object !== undefined ? object.uuid : undefined;
        this.newUuid = newUuid;
    }
    execute() {
        if (!this.object || !this.newUuid)
            return;
        this.object.uuid = this.newUuid;
        this.editor.objectChanged(this.object);
    }
    undo() {
        if (!this.object || !this.oldUuid)
            return;
        this.object.uuid = this.oldUuid;
        this.editor.objectChanged(this.object);
    }
    update() { }
    toJSON() {
        const output = super.toJSON();
        output.oldUuid = this.oldUuid;
        output.newUuid = this.newUuid;
        return output;
    }
    fromJSON(json) {
        super.fromJSON(json);
        this.oldUuid = json.oldUuid;
        this.newUuid = json.newUuid;
        this.object = this.editor.objectByUuid(json.oldUuid);
        if (this.object === undefined) {
            this.object = this.editor.objectByUuid(json.newUuid);
        }
    }
}
export { SetUuidCommand };
