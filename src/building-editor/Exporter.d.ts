import { Editor } from './Editor';
export declare class Exporter {
    editor: Editor;
    link: HTMLAnchorElement;
    constructor(editor: Editor);
    parseNumber(key: any, value: number): number;
    exportGeometry(): void;
    exportObject(): void;
    exportScene(): void;
    exportDAE(): void;
    exportGLB(): void;
    exportGLTF(): void;
    exportOBJ(): void;
    exportPLY(): void;
    exportBinaryPLY(): void;
    exportSTL(): void;
    exportBinarySTL(): void;
    save(blob: Blob, filename: string): void;
    saveArrayBuffer(buffer: BlobPart, filename: string): void;
    saveString(text: BlobPart, filename: string): void;
}
