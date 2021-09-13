import { endpoints } from "./endpoints";

export const environment = {
  production: false,
  base_api: 'https://rcdt-api.herokuapp.com/api',
  filestackAPI: 'AqJu2MTmS4OrNOAI83ApXz',
                //'A7dL8mkNqRwmsg0gvBji6z'

  get: endpoints.get,
  post: endpoints.post,
  put: endpoints.put
};
