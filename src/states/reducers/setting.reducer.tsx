import { AnyAction } from "redux";
import { SettingStore } from "../setting-stores/settingStore";
import { SettingStoreTypes } from "../action-types/settingstore.types";

type SettingStoreState = Omit<
    SettingStore,
    "setModal" 
>

const INITIAL_STATE:SettingStoreState = {
    modalLogin : false,
};

const SettingReducers = (state:SettingStoreState | any =INITIAL_STATE, action : AnyAction  ) =>{
    const {type, payload} = action;
    switch(type){
        case SettingStoreTypes.MODAL_LOGIN :{
            return {
                ...state,
                modalLogin  :payload,
                // modalLogin : action.modalLogin,
                // user : action.user,
            }
        }
        default :
            return state;
    }
}


export type {SettingStoreState}
export default SettingReducers;