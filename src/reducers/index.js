import changeTheNumber from "./UpDown";
import AddToCart from "./AddCart"
import OtherTheNumber from "./MulDiv";
import MassHeightTheNumber from "./MassHeight";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    changeTheNumber, OtherTheNumber, MassHeightTheNumber, AddToCart
})
export default rootReducer;