export namespace Fields {
    export interface ConfigField {
        key: string;
        field: string;
        error: string;
        insert: boolean;
        update: boolean;
        view: boolean;
        format: number;
    }

    export enum Acciones {
        Insert = 0,
        Update = 1,
        Filter = 2
    }
    export interface ResponseG {
        error: string[];
        warning: string[];
        info: ConfigField[];
    }
}
