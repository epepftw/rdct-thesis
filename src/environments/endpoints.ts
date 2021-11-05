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
        screen: '/screen'
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
        
    },

    put: {
        // Playlist
        update: '/playlist/update',
        // Keys
        update_key: '/keys/update'
    }
}