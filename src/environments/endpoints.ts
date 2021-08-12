export const endpoints = {
    get: {
        // Users
        users: '/users',
        users_profile: '/users/profile',
        // Keys
        keys: '/keys',
        // Roles
        roles: '/roles',
        // Advertisers
        advertisers: '/users/advertisers',
        // Media
        mediaFiles: '/media',
    },
    post: {
        // Users
        authenticate: '/users/authenticate',
        register: '/users/register',
        // Keys
        gen_key: '/keys/add',
        // Media
        save_uploaded_file: '/media/add'
        
    }
}