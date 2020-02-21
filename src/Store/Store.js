import { createStore } from 'redux'

const INITIAL_STATE = {
    email: '',
    password: '',
    userName: '',
    userEmail: '',
    photo: '',
    isAnonymous: false,
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

    if (action.type === 'SET_IS_ANONYMOUS') {
        return {
            ...state,
            isAnonymous: action.isAnonymous
        }
    }

    if (action.type === 'CURRENT_USER_CHANGES') {
        return {
            ...state,
            userName: action.userName,
            userEmail: action.userEmail,
            photo: action.photo || 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.jdevoto.cl%2Fweb%2Fvendedor%2Fmario-santana%2Fdefault-user-img%2F&psig=AOvVaw193Gkr8VxSXwHflojQ0QlF&ust=1582227392259000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDEoc2u3ucCFQAAAAAdAAAAABBa'
        }
    }

    return INITIAL_STATE
}

export default createStore(reducer)