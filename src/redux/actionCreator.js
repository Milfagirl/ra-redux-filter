export const ADD_SERVICE = 'ADD_SERVICE'
export const REMOVE_SERVICE = 'REMOVE_SERVICE'
export const CHANGE_SERVICE_FIELD = 'CHANGE_SERVICE_FIELD'
export const CHANGE_SERVICE = 'CHANGE_SERVICE'
export const CANCEL_CHANGE_SERVICE = 'CANCEL_CHANGE_SERVICE'
export const FILTER_SERVICE = 'FILTER_SERVICE'
export const CHANGE_SERVICE_FIELD_FILTER = 'CHANGE_SERVICE_FIELD_FILTER'
// export const FILTER_FLAG = 'FILTER_FLAG'
export const FILTER_COPY_STATE = 'FILTER_COPY_STATE'



//button save
export function addService(name, price, id) {
    if (id) return {type: ADD_SERVICE, payload : {id, name, price}}
    else return {type: ADD_SERVICE, payload : {name, price}}
}

//button delete
export function removeService(id) {
    return {type: REMOVE_SERVICE, payload : {id}}
}

//изменение input
export function changeServiceField(name, value) {  
    return {type: CHANGE_SERVICE_FIELD, payload : {name, value}}
}
 //редактирование данных
 export function changeService(id) {
    return {type: CHANGE_SERVICE, payload : {id}}
}

//отмена редактирования данных
export function cancelChangeService(flag) {
    return {type: CANCEL_CHANGE_SERVICE, payload : {flag}}
}

export function filterService(value) {
    return {type: FILTER_SERVICE, payload : {value}}
}

export function changeServiceFieldFilter(name, value) {  
    return {type: CHANGE_SERVICE_FIELD_FILTER, payload : {name, value}}
}

// export function filterFlag(value) {  
//     return {type: FILTER_FLAG, payload : {value}}
// }
export function filterCopyState(value) {  
    return {type: FILTER_COPY_STATE, payload : {value}}
}