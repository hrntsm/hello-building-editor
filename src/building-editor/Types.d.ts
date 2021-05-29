export interface THREEJsonMetaData {
    metadata: {
        type: string;
        version?: number;
        formatVersion?: number;
    };
}
export declare type THREEJson = THREEJsonMetaData & {
    [index: string]: any;
};
