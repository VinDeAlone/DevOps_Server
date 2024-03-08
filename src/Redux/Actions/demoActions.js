import {GET_ALL_DEMOS, CREATE_DEMO} from '../Constants'
import { getAllData, createNewDemo } from '../../API/demoAPT'

export const getAllDemos = () => async (dispatch) => {
    try {
        const {data} = await getAllData()
        dispatch({
            type : GET_ALL_DEMOS,
            data : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createDemo = (data) => async (dispatch) => {
    try {
        const {result} = await createNewDemo(data)
        console.log(result)
        dispatch({
            type : CREATE_DEMO
        })
    } catch (error) {
        console.log(error)
    }
}