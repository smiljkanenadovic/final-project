import {combineReducers} from "redux";
import fetchTech from "../reducers/fetch_tech";
import customSearch from "../reducers/custom_search";
import authUser from "../reducers/authUser"

const reducers= combineReducers({
    FetchTech: fetchTech,
    CustomSearch: customSearch,
    AuthUser: authUser
});

export default reducers;