export const initialState = {
    user: null,
    playlists: [],
    playlist: [],
    playing: false,
    item: null,
    token: null
};

const reducer = (state, action) => {
    // protip, always include this, its like a debuging tool 
    console.log("debugging action object: ", action);
    console.log("debugging action type object: ", action?.type);
    // action has a type and a payload
    // the type is in the case switch
    switch (action.type) {
        case 'SET_USER':
            return {
                // keep thats on the state, update the user , with whatever the action was
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
        default:
            return state;
    }
}

export default reducer;