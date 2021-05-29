import { Command } from './Command';
class SetValueCommand extends Command {
    constructor(editor, object, attributeName, newValue) {
        super(editor);
        this.type = 'SetValueCommand';
        this.name = 'Set ' + attributeName;
        this.updatable = true;
        this.object = object;
        this.attributeName = attributeName;
        this.oldValue = object ? object[this.attributeName] : undefined;
        this.newValue = newValue;
    }
    execute() {
        if (!this.object || !this.attributeName)
            return;
        this.object[this.attributeName] = this.newValue;
        this.editor.objectChanged(this.object);
    }
    undo() {
        if (!this.object || !this.attributeName)
            return;
        this.object[this.attributeName] = this.oldValue;
        this.editor.objectChanged(this.object);
    }
    update(cmd) {
        this.newValue = cmd.newValue;
    }
    toJSON() {
        var _a;
        const output = super.toJSON();
        output.objectUuid = (_a = this.object) === null || _a === void 0 ? void 0 : _a.uuid;
        output.attributeName = this.attributeName;
        output.oldValue = this.oldValue;
        output.newValue = this.newValue;
        return output;
    }
    fromJSON(json) {
        super.fromJSON(json);
        this.attributeName = json.attributeName;
        this.oldValue = json.oldValue;
        this.newValue = json.newValue;
        this.object = this.editor.objectByUuid(json.objectUuid);
    }
}
export { SetValueCommand };
