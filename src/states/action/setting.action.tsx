import { Dispatch } from "redux";
import { SettingStoreTypes } from "../action-types/settingstore.types";

const setModal = (condition:boolean) => async (dispatch:Dispatch) =>{
    dispatch({
        type : SettingStoreTypes.MODAL_LOGIN,
        payload : condition
    });
}


export const SettingAction = {
    setModal,
}