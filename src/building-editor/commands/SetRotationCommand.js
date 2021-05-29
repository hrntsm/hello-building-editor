import { Command } from './Command';
import * as THREE from 'three';
class SetRotationCommand extends Command {
    constructor(editor, object, newRotation, optionalOldRotation) {
        super(editor);
        this.type = 'SetRotationCommand';
        this.name = 'Set Rotation';
        this.updatable = true;
        this.object = object;
        this.objectUuid = object.uuid;
        if (object !== undefined && newRotation !== undefined) {
            this.oldRotation = object.rotation.clone();
            this.newRotation = newRotation.clone();
        }
        if (optionalOldRotation !== undefined) {
            this.oldRotation = optionalOldRotation.clone();
        }
    }
    execute() {
        this.object.rotation.copy(this.newRotation);
        this.object.updateMatrixWorld(true);
        this.editor.objectChanged(this.object);
    }
    undo() {
        this.object.rotation.copy(this.oldRotation);
        this.object.updateMatrixWorld(true);
        this.editor.objectChanged(this.object);
    }
    update(command) {
        this.newRotation.copy(command.newRotation);
    }
    toJSON() {
        const output = super.toJSON();
        output.objectUuid = this.object.uuid;
        output.oldRotation = this.oldRotation.toArray();
        output.newRotation = this.newRotation.toArray();
        return output;
    }
    fromJSON(json) {
        super.fromJSON(json);
        this.object = this.editor.objectByUuid(json.objectUuid);
        this.oldRotation = new THREE.Euler().fromArray(json.oldRotation);
        this.newRotation = new THREE.Euler().fromArray(json.newRotation);
    }
}
export { SetRotationCommand };
