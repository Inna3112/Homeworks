import {UserType} from "../HW8";

type SortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type CheckType = {
    type: 'check'
    payload: 18
}
type ActionsType = SortType | CheckType

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let newState = [...state].sort((a, b) => {
                if(a.name > b.name){
                    return 1
                } else if (a.name < b.name){
                    return -1
                } else {
                    return 0
                }
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            let filteredState = state.filter(u => u.age >= action.payload)
            return filteredState
        }
        default: return state
    }
}