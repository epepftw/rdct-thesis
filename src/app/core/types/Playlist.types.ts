import { SAVE_FILE_INFO } from "./MediaFile.types";
import { TICKER } from "./MediaFile.types";

export class CREATE_PLAYLIST {
    _id?: string;
    playlist_name?: string;
    playlist_owner_id: string;
    playlist_owner_name: string;
    date_created: string;
    contents: any;
    uuid: string;

    constructor(p_name: string, p_owner_id: string, p_owner_name: string, d_created: string, p_contents: any, uuid: string) {
        this.playlist_name = p_name;
        this.playlist_owner_id = p_owner_id;
        this.playlist_owner_name = p_owner_name;
        this.date_created = d_created;
        this.contents = p_contents;
        this.uuid = uuid;
    }
}


export type PLAYLIST = {
    _id?: string;
    playlist_name: string;
    playlist_owner_id: string;
    playlist_owner_name: string;
    contents: any;
    uuid: string;
}