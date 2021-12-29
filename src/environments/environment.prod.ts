import { endpoints } from "./endpoints";

export const environment = {
  production: false,
  base_api: 'https://rcdt-api.herokuapp.com/api',
  filestackAPI: 'AjV2NdsjfScKcYKZPaWK6z',
  
  get: endpoints.get,
  post: endpoints.post,
  put: endpoints.put,
  delete: endpoints.delete,
};
