
export type ThemeStateType = {
    theme: string
}
const initState: ThemeStateType = {
    theme: 'some'
};
type ActionsType = ReturnType<typeof changeThemeAC>

export const themeReducer = (state = initState, action: ActionsType): ThemeStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                theme: action.theme
            }
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: string) => ({type: 'CHANGE-THEME', theme}) as const