const initialState = 1;
const MassHeightTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "MASS": return state * action.payload;
        case "HEIGHT": return state / 3;
        default: return state;
    }
}
export default MassHeightTheNumber;