export class CREATE_SCREEN {
    screen_name: string;
    template_id: string;
    zone_playlist: zone_data[];

    constructor(
        screen_name: string,
        template_id: string,
        zone_playlist: zone_data[]
    ) {
        this.screen_name = screen_name;
        this.template_id = template_id;
        this.zone_playlist = zone_playlist;
    }
}

export type SCREEN_TYPE = {
    screen_name: string;
    template_id: string;
    zone_playlist: zone_data[];
}

export type zone_data = {
    zone_id: string;
    playlist_id: string;
}

