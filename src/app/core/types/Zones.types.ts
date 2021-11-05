export class CREATE_ZONE {
    zone_name: string;
    background: string;
    z_index: number;
    width: number;
    height: number;
    position_x: number;
    position_y: number;

    constructor(
        zone_name: string,
        background: string,
        z_index: number, 
        width: number, 
        height: number, 
        position_x: number, 
        position_y: number) 
        {
            this.zone_name = zone_name;
            this.background = background;
            this.z_index = z_index;
            this.width = width;
            this.height = height;
            this.position_x = position_x;
            this.position_y = position_y;
        }
}

export type ZONE_TYPE = {
    _id?: string;
    zone_name: string;
    background: string;
    z_index: number;
    width: number;
    height: number;
    position_x: number;
    position_y: number;
    template_id: string;
}