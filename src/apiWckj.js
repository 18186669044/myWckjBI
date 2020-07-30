import axios from 'axios'
import store from './store'
import {
    Notification
} from 'element-ui';
import Cookies from "js-cookie";   
const urlWckj='http://5nwt.com:1102/'
// const urlWckj = 'http://qywx.hhgs.org.cn:9098/'
// const urlWckj = 'http://qywx.hhgs.org.cn:1202/'
// const urlWckj = 'http://192.168.2.151:1102/'
class ApiWckj {

    get(WCKJAPI, pampasCall, params) {
        let cookToken = Cookies.get('token')
        if (cookToken) {
            params.param.token = cookToken
        }
        return axios
            .get(urlWckj + WCKJAPI + pampasCall, { //"/api"
                params: params
            })
            .then(
                res => {
                    if (res.data.code != 0) {
                        Notification.error({
                            title: "error",
                            message: res.data.message
                        });
                    }
                    return Promise.resolve(res.data)
                },
                error => {
                    const errors = error + ''
                    if (errors.indexOf('504') > 0) {
                        error = '网络拥挤，稍后再试504'
                    } else if (errors.indexOf('502') > 0) {
                        error = '网络拥挤，稍后再试502'
                    } else if (errors.indexOf('500') > 0) {
                        error = '网络拥挤，稍后再试500'
                    } else {
                        error = '网络拥挤，稍后再试(other)'
                    }
                    store.commit('error', {
                        status: true,
                        message: error
                    })
                    return Promise.reject(error)
                }
            )
    }
    post(WCKJAPI, pampasCall, params) {
        
        let cookToken = Cookies.get('token')
        if (cookToken) {
            params.param.token = cookToken
        }
        params.param = JSON.stringify(params.param)
        return axios({
            method: 'POST',
            url: urlWckj + WCKJAPI + pampasCall, //'/api/'
            data: params,
            transformRequest: [
                function (data) {
                    return JSON.stringify(data)
                }
            ],
            headers: {
                'Content-Type': 'application/json' //x-www-form-urlencoded
            }
        }).then(
            res => {
                if (res.data.code == 1003) {
                    Notification.error({
                        title: "error",
                        message: res.data.message
                    });
                    Cookies.remove("token");
                }
                if (res.data.code != 0) {
                    Notification.error({
                        title: "error",
                        message: res.data.message
                    });
                }
                return Promise.resolve(res.data)
            },
            error => {
                const errors = error + ''
                if (errors.indexOf('504') > 0) {
                    error = '网络拥挤，稍后再试'
                } else if (errors.indexOf('502') > 0) {
                    error = '网络拥挤，稍后再试'
                } else if (errors.indexOf('500') > 0) {
                    error = '网络拥挤，稍后再试'
                } else {
                    error = '网络拥挤，稍后再试'
                }
                store.commit('error', {
                    status: true,
                    message: error
                })
                return Promise.reject(error)
            }
        )
    }
    postLogin(WCKJAPI, pampasCall, param) {
        const paramAll = {
            param
        }
        return axios({
            method: 'POST',
            url: urlWckj + WCKJAPI + pampasCall, //'/api/' +
            data: paramAll,
            transformRequest: [
                function (data) {
                    return JSON.stringify(data)
                }
            ],
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            res => {
                return Promise.resolve(res.data)
            },
            error => {              
                const errors = error + ''
                if (errors.indexOf('504') > 0) {
                    error = '网络拥挤，稍后再试'
                } else if (errors.indexOf('502') > 0) {
                    error = '网络拥挤，稍后再试'
                } else if (errors.indexOf('500') > 0) {
                    error = '网络拥挤，稍后再试'
                } else {
                    error = '网络拥挤，稍后再试'
                }
                store.commit('error', {
                    status: true,
                    message: error
                })
                return Promise.reject(error)
            }
        )
    }
}

const apiWckj = new ApiWckj()
export default apiWckj