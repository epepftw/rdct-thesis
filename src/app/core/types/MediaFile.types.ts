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