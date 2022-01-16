import { endpoints } from "./endpoints";

export const environment = {
  production: false,
  base_api: 'https://rcdt-api.herokuapp.com/api',
  filestackAPI: 'AUtDJLO2LRcaiKeFPmyXQz',
  
  get: endpoints.get,
  post: endpoints.post,
  put: endpoints.put,
  delete: endpoints.delete,
};
