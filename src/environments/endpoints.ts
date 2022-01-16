export const endpoints = {
    get: {
        // Users
        users: '/user',
        users_profile: '/user/profile',
        // Keys
        keys: '/keys',
        keys_by_keyId: '/keys/getByKeyId',
        keys_by_userId: '/keys/getByUserId',

        // Roles
        roles: '/role',

        // Advertisers
        advertisers: '/user/advertisers',

        // Media
        mediaFiles: '/media',
        mediaFiles_by_userId: '/media/getByUserId',

        // Playlist
        playlist: '/playlist',
        playlist_by_userId: '/playlist/getByUserId',

        // Template
        template: '/template',

        // Zone
        zone: '/zones',

        // Screen
        screen: '/screen',

        // Ticker
        ticker: '/media/get-ticker',

        // YoutubeUrl
        youtubeUrl: '/media/get-youtubeUrl'

    },
    post: {
        // Users
        authenticate: '/user/authenticate',
        register: '/user/register',

        // Keys
        gen_key: '/keys/add',

        // Media
        save_uploaded_file: '/media/add',

        // Playlist
        create_playlist: '/playlist/create',

        // Template
        create_template: '/template/create',

        // Zone
        create_zone: '/zones/create',

        // Screen
        create_screen: '/screen/create',
        
        // Ticker
        create_ticker : '/media/create-ticker',

        // YoutubeUrl
        add_youtubeUrl: '/media/add-youtubeUrl'
    },

    put: {
        // Playlist
        update: '/playlist/update',
        media_info: '/playlist/setDuration',
        // Keys
        update_key: '/keys/update'
    },

    delete: {
        // Keys
        delete_key: '/keys/delete',   
        // Playlist
        delete_playlist_content: '/playlist/deleteContent'  
    }
}