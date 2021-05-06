const initialState = {
    cardData: []
};
const AddToCart = (state = initialState, action) => {
    switch (action.type) {

        case "ADDTOCART":
            return {
                ...state
                cardData: action.data
            }
            break;
        default:
            return state


    }
}
export default AddToCart;