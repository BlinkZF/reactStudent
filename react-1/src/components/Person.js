import React from 'react';
import PropTypes from 'prop-types';
// 入口文件传递过来的参数直接就放到this中，所以这里不涉及传值的问题
// 如果想要改变传递过来的值，要在setState中修改
class Person extends React.Component{
    state = {
        name:this.props.name
    }
    static defaultProps = {//react中的默认属性
        name:"张凡"
    }
    static propTypes = { //数据校验
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.oneOf(['男','女']),//传过来的值是这其中的一项
        figure:PropTypes.objectOf(PropTypes.number),//传过来的值要是对象并且对象中的属性值都是数字
        hobby:PropTypes.arrayOf(PropTypes.string),//传递过来的值要是数组并且里面的属性值都是数字
        salary:(props, propsName, componentName) => {
            if (props[propsName] < 10000) {
              return new Error(
                `${componentName}组件传递过来的${propsName}太小了应该大于10000`
              );
            }
        }
    }
    render() {
        const { name, age, sex, figure, hobby, salary } = this.props
        return(
            <>
            <div>{name} 个人资料</div>
            <div>年龄：{ age }</div>
            <div>性别：{ sex }</div>
            <div>身高：{ figure.height }cm</div>
            <div>体重：{ figure.weight / 2 } kg</div>
            <div>兴趣：{ hobby }</div>
            <div>薪资：{ salary }/月</div>
            <button onClick = {this.handleClike}>点击</button>
            </>
        )
    }

handleClike = () => {
    this.setState({
        
    })
}
}

export default Person;