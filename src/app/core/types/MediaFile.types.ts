import { type } from "os";

export class CREATE_TICKER {
    name: string;
    backgroundColor: string;
    textColor: string;
    fontSize: number;
    content: string;
    marqueeSpeed: number;
    userId: string;
    
    constructor(name: string, backgroundColor: string, textColor: string, fontSize: number, content: string, marqueeSpeed: number, userId: string){
        this.name = name;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.fontSize = fontSize;
        this.content = content;
        this.marqueeSpeed = marqueeSpeed;
        this.userId = userId;
    }
}

export class ADD_YTURL {
    name: string;
    youtubeUrl: string;
    userId: string;

    constructor(name: string, youtubeUrl: string, userId: string){
        this.name = name;
        this.youtubeUrl = youtubeUrl;
        this.userId = userId;
    }
}

export type SAVE_FILE_INFO = {
    _id?: string,
    filename: string,
    file_url: string,
    uploaded_by: string,
    user_id: string,
    mimetype: string,
    size: number,
    playlist_content_id?: string,
    duration?: number
}

export type TICKER = {
    _id?: string,
    name: string,
    backgroundColor: string,
    textColor: string,
    fontSize: number,
    content: string,
    mimetype?: string,
    marqueeSpeed: number,
    userId?: string
}

export type YTURL = {
    _id?: string,
    name: string,
    mimetype?: string,
    youtubeUrl: string,
    userId?: string
}