export default function(state, action) {
    if (state === undefined) {
        // what should be the defalt value for this part of the Redux state
        // what should be selected flat at the beginning
        // null - I have no flat selected
        return null; 
    }

    // TODO: handle actions

    // if (action.type === 'SELECT_FLAT') {
    //     return action.payload;
    // } else {
    //     return state;
    // }

    switch(action.type) {
        case 'SELECT_FLAT':
            return action.payload;
     default:
        return state;  
    }
}