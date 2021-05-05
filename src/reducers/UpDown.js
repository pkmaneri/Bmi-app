const initialState = 10;
const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DENCREMENT": return state - 1;
        default :return state;
    }
}
export default changeTheNumber;