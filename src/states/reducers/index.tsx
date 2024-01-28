import { combineReducers } from "redux";
import SettingReducers from "./setting.reducer";

const reducers = combineReducers({
   //bebas mendefenisikan apa saja
    setting : SettingReducers
});

export default reducers;