const initState = {
    inpVal:"sadasd",
    list:[1,2,3]
}
export default (state=initState,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case 'CHANGE_INPUT_VAL':
            // 主要reducer不能对state直接更改，需要克隆一份，更改复制的然后将更改之后的返回出去 ***
            newState.inpVal = action.value;
            return newState;
        case 'ADD_TODO_ITEM':
            newState.list.push(action.value);
            newState.inpVal = "";
            return newState;
        case 'DELETE_TODO_LIST':
            newState.list.splice(action.index,1)
            return newState;
    }
    return state;
}