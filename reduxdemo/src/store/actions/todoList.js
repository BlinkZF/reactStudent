// 放置执行的功能
import * as Types from '../actionTypes'
// 监听input输入
export const changeValue = (value) => {
    return {
        type: Types.CHANGE_INPUT_VAL,
        value
    }
}
// 增加
export const addItem = (value) => {
    return {
        type: Types.ADD_TODO_ITEM,
        value
    }
}
// 删除
export const deleteItem = (index) => {
    return {
        type: Types.DELETE_TODO_ITEM,
        index
    }
}
