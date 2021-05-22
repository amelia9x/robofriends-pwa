import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it("expect render CounterButton component", () => {
    expect(shallow(<CounterButton color="red " />)).toMatchSnapshot();
})

it("expect after click, count props will be changed", () => {
    const initalProps = { color: 'black' }
    const mockCounterButton = mount(<CounterButton {...initalProps} />)
    const btn = mockCounterButton.find('button');
    btn.simulate('click');
    expect(mockCounterButton.state('count')).toEqual(2);
});

// it("Props won't be changed after state changed", () => {
//     mockCounterButton.setProps({ color: 'yellow' });
//     expect(mockCounterButton.state('count')).toEqual(1);
// });

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    const button = wrapper.find('#counter');
    button.simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 })
    button.simulate('keypress');
    expect(wrapper.state()).toEqual({ count: 2 })
    expect(wrapper.prop('color')).toEqual('red')
    expect(wrapper.props().color).toEqual('red')
})
