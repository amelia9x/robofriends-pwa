import React from 'react'
import { shallow, mount, render } from 'enzyme'
import MainPage from './MainPage'

let wrapper;
beforeEach(() => {
    const mockProps = {
        searchField: '',
        robots: [],
        isPending: false,
        onRequestRobots: jest.fn()
    }

    wrapper = shallow(<MainPage {...mockProps} />)
})

it("expect render MainPage component", () => {
    expect(wrapper).toMatchSnapshot();
})

it("filters robots correctly", () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);

    const mockProps2 = {
        searchField: 'el',
        robots: [{
            key: 1,
            id: 1,
            name: 'Elean Job',
            email: "job@gmail.com"
        }],
        isPending: false,
        onRequestRobots: jest.fn()
    }

    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        key: 1,
        id: 1,
        name: 'Elean Job',
        email: "job@gmail.com"
    }]);
})

it("filters robots correctly 2", () => {
    const mockProps3 = {
        searchField: 'p',
        robots: [{
            key: 1,
            id: 1,
            name: 'Elean Job',
            email: "job@gmail.com"
        }],
        isPending: false,
        onRequestRobots: jest.fn()
    }

    const wrapper3 = shallow(<MainPage {...mockProps3} />)
    const resultedRobots = [];
    expect(wrapper3.instance().filterRobots()).toEqual(resultedRobots)
})

it("filters robots correctly", () => {
    const mockProps4 = {
        searchField: 'p',
        robots: [],
        isPending: true,
        onRequestRobots: jest.fn()
    }

    const wrapper4 = shallow(<MainPage {...mockProps4} />)
    expect(wrapper4.find('h1').exists()).toBe(true);
    expect(wrapper4.find('h1').exists()).toBeTruthy();
})

// describe('App is loading', () => {
//     it('Is loading', () => {
//         const nextProps = {
//             searchField: 'el',
//             robots: [{
//                 key: 1,
//                 id: 1,
//                 name: 'Elean Job',
//                 email: "job@gmail.com"
//             }],
//             isPending: false,
//             count: 1,
//         };

//         const wrapper = shallow(<App store={store} />);
//         const app = wrapper.find(Body);
//         expect(app.prop('searchField')).toEqual(props.data.searchField);
//         expect(app.prop('robots')).toEqual(props.data.robots);
//         expect(app.prop('isPending')).toEqual(props.data.isPending);
//         expect(app.prop('count')).toEqual(props.data.count);
//     });
// });
