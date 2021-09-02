import { SAVE_FILE_INFO } from "./MediaFile.types";
export class CREATE_PLAYLIST {
    _id?: string;
    playlist_name: string;
    playlist_owner: string;
    contents: SAVE_FILE_INFO[];

    constructor(p_name: string, p_owner: string, p_contents: SAVE_FILE_INFO[]) {
        this.playlist_name = p_name;
        this.playlist_owner = p_owner;
        this.contents = p_contents;
    }
}

