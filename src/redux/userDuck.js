const initialData = {
    loggedIn: false
}
const LOGIN = 'LOGIN';

export default function reducer(state = initialData, action) {
    switch(action.type) {
        case LOGIN:
            return;

        default:
            return state

    }
}