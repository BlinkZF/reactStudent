import * as Types from '../actionTypes'
const initState = {
    count:0
}
export default (state=initState,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    // 将type和action抽离出来
    switch (action.type){
        case Types.COUNT_ADD:
            newState.count = newState.count + action.count;
            return newState;
    }
    return state;
}
