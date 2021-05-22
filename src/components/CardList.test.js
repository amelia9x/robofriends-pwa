import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';


it("expect render CardList component", () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'johnjohn',
            email: 'john@email.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})