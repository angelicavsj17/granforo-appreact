import http from './http-config';

const get = (path) => {

    return http.get(path);
}

const post = (path, data) => {
    return http.post(path, data);
}

const put = (path, data) => {
    
    return http.put(path, data);
}

const remove = (path) => {

    return http.delete(path)
}

export default {
    get,
    post,
    put,
    remove
  };