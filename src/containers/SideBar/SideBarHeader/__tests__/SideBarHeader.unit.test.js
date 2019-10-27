import React from 'react';
import { shallow } from 'enzyme';
import { SideBarHeader } from '../SideBarHeader';

test('renders SideBarHeader', () => {
    const wrapper = shallow(
        <SideBarHeader/>
    );
    expect(wrapper).toMatchSnapshot();
});