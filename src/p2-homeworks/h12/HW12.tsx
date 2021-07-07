import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


const themes = ['some', 'dark', 'red'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.themes.theme)
    const dispatch = useDispatch()
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeAC(e.currentTarget.value))
    }
    const onChangeRadioCallback = (e:  ChangeEvent<HTMLInputElement>) => {
        dispatch(changeThemeAC(e.currentTarget.value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div>
                <SuperSelect onChange={onChangeCallback} options={themes}/>
            </div>
            <div>
                <SuperRadio onChange={onChangeRadioCallback} options={themes}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
