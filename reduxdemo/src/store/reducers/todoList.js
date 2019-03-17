// 存放todolist的数据
import * as Types from '../actionTypes'
const initState = {
    inpVal:"sadasd",
    list:[1,2,3],
}
export default (state=initState,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    // 将type和action抽离出来
    switch (action.type){
        case Types.CHANGE_INPUT_VAL:
            // 主要reducer不能对state直接更改，需要克隆一份，更改复制的然后将更改之后的返回出去 ***
            newState.inpVal = action.value;
            return newState;
        case Types.ADD_TODO_ITEM:
            newState.list.push(action.value);
            newState.inpVal = "";
            return newState;
        case Types.DELETE_TODO_ITEM:
            newState.list.splice(action.index,1);
            return newState;
    }
    return state;
}
