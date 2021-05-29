import * as THREE from 'three';
import { Editor } from './Editor';
declare type FilesMap = {
    [index: string]: File;
};
export declare function createFilesMap(files: File[]): FilesMap;
export declare function getFilesFromItemList(items: DataTransferItem[], onDone: (files: File[], filesMap?: FilesMap) => void): void;
declare class Loader {
    editor: Editor;
    texturePath: string;
    constructor(editor: Editor);
    loadItemList(items: DataTransferItem[]): void;
    loadFiles(files: File[], filesMap?: FilesMap, parent?: THREE.Object3D, onLoad?: (object: THREE.Object3D | undefined) => void, onError?: (error: any) => void): void;
    loadFile(file: File, manager?: THREE.LoadingManager, parent?: THREE.Object3D, onLoad?: (object: THREE.Object3D | undefined, file: File) => void, onError?: (error: any) => void): void;
    private _handleJSON;
    private _isGLTF1;
}
export { Loader };
