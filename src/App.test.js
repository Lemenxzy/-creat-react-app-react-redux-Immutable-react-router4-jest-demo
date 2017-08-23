import React from 'react';
import ReactDOM from 'react-dom';
import Home from './container/Home/index';
/* 引入了 enzyme
   后需要引入 "react-addons-test-utils" 依赖
   会有warning  大多数的warning是react的提示，
   可以引入 "react-test-renderer" 消除 warning
   Tips
      1. 所有的这些依赖的版本号应该相同 不然会报错
      2. expect 对象是jest的对象（容易忘记）
*/
import { shallow } from 'enzyme';

describe('Home  component render', () => {
    const wrapper = shallow(<Home />)

    it('Home component render', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
    });

    it("shoulder render the 19 p",()=>{
        // 找到元素，组件下面有几个
        expect(wrapper.find("p").length).toEqual(19);
        // the same
        expect(wrapper.find("p")).toHaveLength(19);
        
        expect(wrapper.find("p").length).toBe(19);
    })

    it("Home the first p text",()=>{
        // const wrapper = shallow(<Home />)
        const title = "11111111"
        // 测试Home组件下的第一个<p> 是不是 title
        expect(wrapper.find("p").first().text()).toEqual(title);
    })

    console.log("-----------------next----------------------")
});
// 测试案例
class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <div className={`clicks-${count}`}>
                    {count} clicks
                </div>
                <a href="url" onClick={() => { this.setState({ count: count + 1 }); }}>
                    Increment
                </a>
            </div>
        );
    }
}

describe("render Foo Component",()=>{
    const wrapper = shallow(<Foo />)
    it("shallow render finish",()=>{
        expect(wrapper.find(".clicks-0").length).toBe(1)
    })

    it("click the a tag",()=>{
        // 模拟事件使用 simulate(event,args)
        wrapper.find("a").simulate("click")
        expect(wrapper.find(".clicks-1").length).toBe(1)
    })
})