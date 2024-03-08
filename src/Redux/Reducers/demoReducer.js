import {GET_ALL_DEMOS, CREATE_DEMO} from '../Constants'

const initialState = [
    { id: 0, name: "demo", age: 20 }
]

export const demoReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_ALL_DEMOS :
            return action.data
        case CREATE_DEMO :
            return state
        default :
            return state
    }

}