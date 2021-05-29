import { Command } from './Command';
import * as THREE from 'three';
class SetScaleCommand extends Command {
    constructor(editor, object, newScale, optionalOldScale) {
        super(editor);
        this.type = 'SetScaleCommand';
        this.name = 'Set Scale';
        this.updatable = true;
        this.object = object;
        this.objectUuid = object.uuid;
        this.oldScale = object.scale.clone();
        this.newScale = newScale.clone();
        if (optionalOldScale !== undefined) {
            this.oldScale = optionalOldScale.clone();
        }
    }
    execute() {
        this.object.scale.copy(this.newScale);
        this.object.updateMatrixWorld(true);
        this.editor.objectChanged(this.object);
    }
    undo() {
        this.object.scale.copy(this.oldScale);
        this.object.updateMatrixWorld(true);
        this.editor.objectChanged(this.object);
    }
    update(command) {
        this.newScale.copy(command.newScale);
    }
    toJSON() {
        const output = super.toJSON();
        output.objectUuid = this.object.uuid;
        output.oldScale = this.oldScale.toArray();
        output.newScale = this.newScale.toArray();
        return output;
    }
    fromJSON(json) {
        super.fromJSON(json);
        this.object = this.editor.objectByUuid(json.objectUuid);
        this.oldScale = new THREE.Vector3().fromArray(json.oldScale);
        this.newScale = new THREE.Vector3().fromArray(json.newScale);
    }
}
export { SetScaleCommand };
