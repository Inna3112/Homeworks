
export type initStateType = typeof initState
type ActionType = {
    type: 'CHANGE-LOADING',
    isLoading: boolean,
}

const initState = {
    isLoading: false
};

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean): ActionType => {
    return {
        type: 'CHANGE-LOADING',
        isLoading
    }
}// fix any