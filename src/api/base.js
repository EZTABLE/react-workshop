import "isomorphic-fetch";
import _ from "underscore";
import qs from "querystring";

let isoFetch = global.fetch,
    api, getApi;

getApi = () => {
    if (api) {
        return api;
    }

    return api = {
        build: (path, query = {}) => {
            let _query = _.extend({}, query, {
                access_token: "U44fmLv95QGCLID3PTGVJ23xhoBeOl6FdHfknfyC"
            });

            var url = `https://api.eztable.com/${path}?${qs.stringify(_query)}`;
            return url;
        },
        get: ({path, query}) => {
            return new Promise((resolve, reject) => {
                isoFetch(api.build(path, query))
                .then((response) => {
                    if (response.status >= 400) {
                        response.json().then((data)=>{
                            reject(data);
                        });
                    } else {
                        resolve(response.json());
                    }
                });
            });
        },
        post: ({path, query, body}) => {
            return new Promise((resolve, reject) => {
                isoFetch(api.build(path, query), {
                    method: "post",
                    body: JSON.stringify(body)
                }).then((response) => {
                    if (response.status >= 400) {
                        response.json().then((data)=>{
                            reject(data);
                        });
                    } else {
                        resolve(response.json());
                    }
                });
            });
        }
    };
};

module.exports = getApi();
