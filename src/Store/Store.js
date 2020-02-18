import { createStore } from 'redux'

const INITIAL_STATE = {
    email: '',
    password: '',
    userName: '',
    userEmail: '',
    photo: ''
}

const reducer = (state, action) => {

    if (action.type === 'CHANGE_TXT_EMAIL_LOGIN') {
        return {
            ...state,
            email: action.email
        }
    }

    if (action.type === 'CHANGE_TXT_PASSWORD_LOGIN') {
        return {
            ...state,
            password: action.password
        }
    }

    if (action.type === 'CURRENT_USER_CHANGES') {
        return {
            ...state,
            userName: action.userName,
            userEmail: action.userEmail,
            photo: action.photo
        }
    }

    return INITIAL_STATE
}

export default createStore(reducer)