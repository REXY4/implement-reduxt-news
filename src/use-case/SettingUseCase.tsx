import { SettingAction } from "@/states/action/setting.action";
import { SettingStoreState } from "@/states/reducers/setting.reducer";
import { SettingStore } from "@/states/setting-stores/settingStore";
import { AppRootState } from "@/states/stores";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const selector = (state:AppRootState) => state.setting;

const SettingUseCase = () : SettingStore =>{
    const {
        modalLogin
    } = useSelector<
    AppRootState,
    SettingStoreState
    >(selector);
    const dispatch = useDispatch();
    const setModal = useCallback((condition:boolean)=>SettingAction.setModal(condition)(dispatch),[dispatch]);

    return {
        modalLogin,
        //action
        setModal,
    }
}

export default SettingUseCase;