import React from 'react';
import { shallow } from 'enzyme';
import { SideBarItem } from '../SideBarItem';

describe('SideBarItem', () => {
    //test for rendering empty SideBarItem
    test('Renders empty SideBarItem', () => {
        const wrapper = shallow(
            <SideBarItem />
        );
        expect(wrapper).toMatchSnapshot();
    });

    //test for rendering highlighted SideBarItem which navigates to /feed/trending
    test('Renders highlighted SideBarItem which navigates to /feed/trending', () => {
        const wrapper = shallow(
            <SideBarItem highlighted icon='fire' label='Trending'/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    //test for rendering non-highlighted SideBarItem which navigates to /feed/trending
    test('Renders non-highlighted SideBarItem which navigates to /feed/trending', () => {
        const wrapper = shallow(
            <SideBarItem icon='fire' label='Trending'/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    //test for rendering non-highlighted SideBarItem which navigates to /feed/trending
    test('Renders highlighted SideBarItem which no navigation', () => {
        const wrapper = shallow(
            <SideBarItem highlighted icon='fire' label='Trending'/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});