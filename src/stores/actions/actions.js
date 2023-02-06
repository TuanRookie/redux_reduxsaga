import * as types from "./actionType"

export const loadUserStart = () => {
    return {
        type: types.LOAD_USERS_START
    }
}

export const loadUserSuccess = (users) => {
    return {
        type: types.LOAD_USERS_SUCCESS,
        payload: users,
    }
}

export const loadUserError = (error) => {
    return {
        type: types.LOAD_USERS_ERROR,
        payload: error,
    }
}
////////
export const createUserStart = (user) => {
    return {
        type: types.CREATE_USERS_START,
        payload: user
    }
}

export const createUserSuccess = () => {
    return {
        type: types.CREATE_USERS_SUCCESS,
    }
}

export const createUserError = (error) => {
    return {
        type: types.CREATE_USERS_ERROR,
        payload: error,
    }
}
//////
export const deleteUserStart = (userId) => {
    return {
        type: types.DELETE_USERS_START,
        payload: userId
    }
}

export const deleteUserSuccess = (userId) => {
    return {
        type: types.DELETE_USERS_SUCCESS,
        payload: userId
    }
}

export const deleteUserError = (error) => {
    return {
        type: types.DELETE_USERS_ERROR,
        payload: error,
    }
}
/////
export const updateUserStart = (userInfo) => {
    return {
        type: types.UPDATE_USERS_START,
        payload: userInfo
    }
}

export const updateUserSuccess = () => {
    return {
        type: types.UPDATE_USERS_SUCCESS,
    }
}

export const updateUserError = (error) => {
    return {
        type: types.UPDATE_USERS_ERROR,
        payload: error,
    }
}
