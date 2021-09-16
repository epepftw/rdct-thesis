export const endpoints = {
    get: {
        // Users
        users: '/users',
        users_profile: '/users/profile',
        // Keys
        keys: '/keys',
        keys_by_userId: '/keys/getByUserId',

        // Roles
        roles: '/roles',

        // Advertisers
        advertisers: '/users/advertisers',

        // Media
        mediaFiles: '/media',
        mediaFiles_by_userId: '/media/getByUserId',

        // Playlist
        playlist: '/playlist',
        playlist_by_userId: '/playlist/getByUserId',

    },
    post: {
        // Users
        authenticate: '/users/authenticate',
        register: '/users/register',
        // Keys
        gen_key: '/keys/add',
        // Media
        save_uploaded_file: '/media/add',
        // Playlist
        create_playlist: '/playlist/create'
        
    },

    put: {
        // Playlist
        update: '/playlist/update'
    }
}