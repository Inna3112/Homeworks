import axios from "axios";

export const requestAPI = {
    checkedSuccess(checked: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',
            {success: checked})

    }
}