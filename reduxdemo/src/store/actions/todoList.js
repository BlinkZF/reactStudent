// 放置执行的功能
import * as Types from '../actionTypes'
// 监听input输入
export const getTodoChangeInputValueAction = (value) => {
    return {
        type: Types.CHANGE_INPUT_VAL,
        value
    }
}
// 增加
export const getTodoAddItemAction = (value) => {
    return {
        type: Types.ADD_TODO_ITEM,
        value
    }
}
// 删除
export const getTodoDeleteItemAction = (index) => {
    return {
        type: Types.DELETE_TODO_ITEM,
        index
    }
}
