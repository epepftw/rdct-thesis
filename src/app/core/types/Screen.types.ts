import { TEMPLATE_SCREEN } from "./Template.types";
import { ZONE_SCREEN } from "./Zones.types";


export class CREATE_SCREEN {
    
    screen_name: string;
    advertiser_id: string;
    template_id: string;
    zone_playlist: ZONE_PLAYLIST[];

    constructor(
        screen_name: string,
        advertiser_id: string,
        template_id: string,
        zone_playlist: ZONE_PLAYLIST[]
    ) {
        this.screen_name = screen_name;
        this.advertiser_id = advertiser_id;
        this.template_id = template_id;
        this.zone_playlist = zone_playlist;
    }
}

export type SCREEN = {
    advertiser_id: string;
    screen_id: string;
    screen_name: string;
    template: TEMPLATE_SCREEN;
    zones: ZONE_SCREEN[];
}



export type SCREEN_TYPE = {
    _id?: string;
    screen_name?: string;
    advertiser_id?: string;
    template_id?: string;
    zone_playlist?: [
        {
            zone_id?: string,
            playlist_id?: string
        }
    ]
}

export class ZONE_PLAYLIST  {
    zone_id?: string;
    playlist_id?: string;

    constructor(zone_id?: string, playlist_id?: string) {
        this.zone_id = zone_id;
        this.playlist_id = playlist_id;
    }
    
}
