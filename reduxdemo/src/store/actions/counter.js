// 放置counter模块的功能
import * as Types from '../actionTypes'
// 监听input输入
export const getCountAdd = (count) =>{
    return {
        type:Types.COUNT_ADD,
        count
    }
}