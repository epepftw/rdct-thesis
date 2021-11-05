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
    _id?: string;
    name: string;
}