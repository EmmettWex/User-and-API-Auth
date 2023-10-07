
const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';

const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
}

const storeCurrentUser = user => {
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    } else {
        sessionStorage.removeItem('currentUser');
    }
}

export const login = (email, password) => async dispatch => {
    const response = await fetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ email, password })
    })

    if (response.ok) {
        const data = await response.json();
        storeCurrentUser(data.user);
        dispatch(setCurrentUser(data.user));
        return response;
    }
}

export const logout = () => async dispatch => {
    const response = await fetch('/api/session', {
        method: 'DELETE'
    });
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return response;
}

export const signup = (username, password) => async dispatch => {
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password })
    })

    if (response.ok) {
        const account = await response.json();
        storeCurrentUser(account.user);
        dispatch(setCurrentUser(account.user));
        return response;
    }
}

// if you want to do a csrf token, you would also need a restoreSession() thunk action creator

const initialState = {
    user: JSON.parse(sessionStorage.getItem('currentUser'))
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.payload };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};

export default sessionReducer;