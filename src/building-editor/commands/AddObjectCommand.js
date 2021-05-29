import * as THREE from 'three';
import { Command } from './Command';
class AddObjectCommand extends Command {
    constructor(editor, object, parent, index) {
        super(editor);
        this.type = 'AddObjectCommand';
        this.object = object;
        this.parent = parent;
        this.index = index;
        if (object) {
            this.name = 'Add Object: ' + object.name;
        }
    }
    execute() {
        if (!this.object)
            return;
        this.editor.addObject(this.object, this.parent, this.index);
        this.editor.select(this.object);
    }
    undo() {
        if (!this.object)
            return;
        this.editor.removeObject(this.object);
        this.editor.select(null);
    }
    update() { }
    toJSON() {
        const output = super.toJSON();
        if (!this.object)
            return output;
        output.object = this.object.toJSON();
        return output;
    }
    fromJSON(json) {
        var _a;
        super.fromJSON(json);
        if ((_a = json.object) === null || _a === void 0 ? void 0 : _a.uuid) {
            this.object = this.editor.objectByUuid(json.object.uuid);
        }
        else {
            this.object = undefined;
        }
        if (!this.object) {
            const loader = new THREE.ObjectLoader();
            this.object = loader.parse(json.object);
        }
    }
}
export { AddObjectCommand };
