import axios from 'axios';
/**
 * @param {*} Vue
 */
export function useAxios (Vue) {
    /**
     * @param {String} path
     * @param {Object} params
     * @param {Object} options
     */
    Vue.prototype.$http = function (path, params = {}, options = {}) {
        // get
        if (!(options && options.method && options.method.toUpperCase() === 'POST')) {
            path = path.replace('?', '') + '?' + Object.keys(params).map((key) => {
                return `${key}=${params[key]}`
            }).join('&')
        }
        return axios({
            method: 'get',
            url: path,
            data: { ...params },
            ...options
        })
    }
}