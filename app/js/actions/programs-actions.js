export function addProgram(name, description, days) {
    return {
        type: 'ADD_PROGRAM',
        payload: {
            name,
            description,
            days
        }
    }
}