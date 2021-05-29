import * as THREE from 'three';
import { Command } from './Command';
class RemoveObjectCommand extends Command {
    constructor(editor, object) {
        super(editor);
        this.type = 'RemoveObjectCommand';
        this.name = 'Remove Object';
        this.object = object;
        this.parent = (object === null || object === void 0 ? void 0 : object.parent) || undefined;
        this.index = -1;
        if (this.object && this.parent) {
            this.index = this.parent.children.indexOf(this.object);
        }
    }
    execute() {
        if (!this.object)
            return;
        this.editor.removeObject(this.object);
        this.editor.select(null);
    }
    undo() {
        if (!this.object)
            return;
        this.editor.addObject(this.object, this.parent, this.index);
        this.editor.select(this.object);
    }
    update() { }
    toJSON() {
        var _a;
        const output = super.toJSON();
        if (!this.object)
            return output;
        output.object = this.object.toJSON();
        output.index = this.index;
        output.parentUuid = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.uuid;
        return output;
    }
    fromJSON(json) {
        var _a;
        super.fromJSON(json);
        this.parent = this.editor.objectByUuid(json.parentUuid);
        if (!this.parent) {
            this.parent = this.editor.scene;
        }
        this.index = json.index;
        this.object = this.editor.objectByUuid((_a = json.object) === null || _a === void 0 ? void 0 : _a.uuid);
        if (!this.object) {
            const loader = new THREE.ObjectLoader();
            this.object = loader.parse(json.object);
        }
    }
}
export { RemoveObjectCommand };
