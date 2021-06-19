import {combinedReducers} from "redux";

import auth from "./auth";
import message from "./message";

export default combinedReducers ({
    auth,
    message,
})