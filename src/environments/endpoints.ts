export const endpoints = {
    get: {
        users: '/users',
        users_profile: '/users/profile',
        keys: '/keys',
        roles: '/roles',
        advertisers: '/users/advertisers'
    },
    post: {
        authenticate: '/users/authenticate',
        register: '/users/register',
        gen_key: '/keys/add'
    }
}