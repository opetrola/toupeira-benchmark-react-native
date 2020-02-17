import { createStore } from 'redux'

const INITIAL_STATE = {
    email: ''
}

const reducer = (state, action) => {
    if (action.type === 'CHANGE_TXT_EMAIL_LOGIN') {
        return {
            ...state,
            email: action.email
        }
    }
    return INITIAL_STATE
}

export default createStore(reducer)