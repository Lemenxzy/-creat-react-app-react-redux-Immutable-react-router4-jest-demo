import * as reducerType from 'Utils/reducerType.js'

export const add = function (data) {
    return {
            type:reducerType.ADD,
            data:data*1 + 1
        }
};


export const show = function (data) {
    return {
        type:reducerType.SHOW,
        data:data*1
    }
};


