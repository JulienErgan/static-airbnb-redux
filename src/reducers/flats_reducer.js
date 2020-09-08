export default function(state, action) {
    // compute and return the new state
    if (state === undefined) {
        // Reducer initialisation
        return [];
    }

    // TODO: handle actions
    // if (action.type === 'SET_FLATS') {
    //     return action.payload;
    // } else {
    //     // be careful - the reducer always need to return something
    //     return state;
    // }

    switch(action.type) {
        case 'SET_FLATS':
            return action.payload;
     default:
        return state;  
    }
}