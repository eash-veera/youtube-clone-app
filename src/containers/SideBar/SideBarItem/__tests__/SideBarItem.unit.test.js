import React from 'react';
import { shallow } from 'enzyme';
import { SideBarItem } from '../SideBarItem';

test('renders SideBarItem', () => {
    const wrapper = shallow(
        <SideBarItem />
    );

    expect(wrapper).toMatchSnapshot();
});