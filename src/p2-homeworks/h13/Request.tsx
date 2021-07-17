import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestAPI} from "./RequestAPI";


function Request() {
    const [checked, setChecked] = useState<boolean>(false)
    const [responseData, setResponseData] = useState('')
    const [errorText, setErrorText] = useState('')
    const [disabled, setDisabled] = useState(false)



    const onClickCallback = () => {
        setChecked(!checked)
        setDisabled(true)
        requestAPI.checkedSuccess(checked)
            .then(response => {
                setResponseData(response.data.errorText)
                setDisabled(false)
                setErrorText('')
            })
            .catch(error => {
                setErrorText(error.response.data.errorText)
                setDisabled(false)
                setResponseData('')
            })


    }

    return (
        <div>
            <div>
                <SuperButton onClick={onClickCallback} disabled={disabled}>Click me)....</SuperButton>
            </div>
            <div>
                <SuperCheckbox checked={checked}/> success
            </div>
            <div>
                {
                    responseData ? responseData : errorText
                }
            </div>
        </div>
    )
}

export default Request