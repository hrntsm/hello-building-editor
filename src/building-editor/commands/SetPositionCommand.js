import { Command } from './Command';
import * as THREE from 'three';
class SetPositionCommand extends Command {
    constructor(editor, object, newPosition, optionalOldPosition) {
        super(editor);
        this.type = 'SetPositionCommand';
        this.editor = editor;
        this.name = 'Set Position';
        this.updatable = true;
        this.object = object;
        this.objectUuid = this.object.uuid;
        this.newPosition = newPosition.clone();
        this.oldPosition = object.position.clone();
        if (optionalOldPosition !== undefined) {
            this.oldPosition = optionalOldPosition.clone();
        }
    }
    execute() {
        this.object.position.copy(this.newPosition);
        this.object.updateMatrixWorld(true);
        this.editor.objectChanged(this.object);
    }
    undo() {
        this.object.position.copy(this.oldPosition);
        this.object.updateMatrixWorld(true);
        this.editor.objectChanged(this.object);
    }
    update(command) {
        this.newPosition.copy(command.newPosition);
    }
    toJSON() {
        const output = super.toJSON();
        output.objectUuid = this.object.uuid;
        output.oldPosition = this.oldPosition.toArray();
        output.newPosition = this.newPosition.toArray();
        return output;
    }
    fromJSON(json) {
        super.fromJSON(json);
        this.object = this.editor.objectByUuid(json.objectUuid);
        this.oldPosition = new THREE.Vector3().fromArray(json.oldPosition);
        this.newPosition = new THREE.Vector3().fromArray(json.newPosition);
    }
}
export { SetPositionCommand };
