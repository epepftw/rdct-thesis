export type UPLOADED_FILE = {
    filename: string;
    handle: string;
    mimetype: string;
    size: number;
    url: string;
    originalFile: origFileData;
    status: string;
}

type origFileData = {
    name: string;
    type: string;
    size: number;
}

