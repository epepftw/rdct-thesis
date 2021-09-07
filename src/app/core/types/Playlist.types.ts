import { SAVE_FILE_INFO } from "./MediaFile.types";
export class CREATE_PLAYLIST {
    _id?: string;
    playlist_name: string;
    playlist_owner_id: string;
    playlist_owner_name: string;
    contents: SAVE_FILE_INFO[];

    constructor(p_name: string, p_owner_id: string, p_owner_name: string, p_contents: SAVE_FILE_INFO[]) {
        this.playlist_name = p_name;
        this.playlist_owner_id = p_owner_id;
        this.playlist_owner_name = p_owner_name;
        this.contents = p_contents;
    }
}


export type PLAYLIST = {
    _id?: string;
    playlist_name: string;
    playlist_owner_id: string;
    playlist_owner_name: string;
    contents: SAVE_FILE_INFO[];
}