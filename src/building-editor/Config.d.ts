export interface BuildingEditorConfig {
    'exportPrecision': number;
    'control/orbitControls/enable': boolean;
    'control/transformControls/enable': boolean;
    'control/viewCubeControls/visible': boolean;
    'control/viewCubeControls/size'?: number;
    'control/viewCubeControls/style'?: string;
    'control/viewCubeControls/perspective'?: boolean;
    'debug': boolean;
    'history': boolean;
    'select/enabled': boolean;
    'redo/enabled': boolean;
    'undo/enabled': boolean;
}
export declare type EditorConfig = Partial<BuildingEditorConfig>;
export declare class Config {
    name: string;
    config: BuildingEditorConfig;
    constructor(config?: EditorConfig);
    getKey<K extends keyof BuildingEditorConfig>(key: K): BuildingEditorConfig[K];
    set(config: EditorConfig): void;
    clear(): void;
}
