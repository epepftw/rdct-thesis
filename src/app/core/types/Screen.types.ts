export class CREATE_SCREEN {
    screen_name: string;
    template_id: string;
    zone_playlist: [
        {
            zone_id: string,
            playlist_id: string
        }
    ];

    constructor(
        screen_name: string,
        template_id: string,
        zone_playlist: [
            {
                zone_id: string,
                playlist_id: string
            }
        ]
    ) {
        this.screen_name = screen_name;
        this.template_id = template_id;
        this.zone_playlist = zone_playlist;
    }
}

export type SCREEN_TYPE = {
    screen_name?: string;
    template_id?: string;
    zone_playlist?: [
        {
            zone_id?: string,
            playlist_id?: string
        }
    ]
}


