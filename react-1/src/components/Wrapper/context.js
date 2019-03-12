import React from "react"

// React.createContext() ==>执行之后产生obj(Pervider\Consumer)

let {Provider,Consumer} = React.createContext();

export {
    Provider,
    Consumer
    // 这两个是一个组件
}