export default function(state=[], action) {
    switch(action.type) {
    case "ADD_PROGRAM": {
        state = state.concat(action.payload)
        break
    }
    }
    return state
}