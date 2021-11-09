import { CREATE_ZONE } from "./Zones.types";

export class CREATE_TEMPLATE {
    name: string;
    zones: CREATE_ZONE[];

    constructor(name: string, zones: CREATE_ZONE[]) {
       this.name = name;
       this.zones = zones;
    }
}

export type TEMPLATE_TYPE = {
    template: {
        _id?: string;
        name: string;
    }
    zones: CREATE_ZONE[];
}

export type TEMPLATE_SCREEN = {
        _id?: string;
        name: string;
}