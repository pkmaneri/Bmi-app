const initialState = 1;
const OtherTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLE": return state * action.payload;
        case "DIVISION": return state / 3;
        default: return state;
    }
}
export default OtherTheNumber;