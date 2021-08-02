import { endpoints } from "./endpoints";

export const environment = {
  production: true,
  base_api: 'http://192.168.100.11:3000/api',
  api: 'https://jsonplaceholder.typicode.com',
  mediaFiles: '/photos?_start=0&_limit=40',
  get: endpoints.get,
  post: endpoints.post
};