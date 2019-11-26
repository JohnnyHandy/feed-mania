import * as actionTypes from './actionTypes'
const initialState={
    content:[]
}

const setContent = (state,action)=>{
    console.log(action.data)
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.SET_CONTENT:return setContent(state,action)
        default:
            return state
    }
}

export default reducer