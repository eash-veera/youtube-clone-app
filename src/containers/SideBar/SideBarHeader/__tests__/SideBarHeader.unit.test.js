import React from 'react';
import { shallow } from 'enzyme';
import { SideBarHeader } from '../SideBarHeader';


describe('SideBarHeader', () => {

    test('Renders sidebar header with props.title=null', () => {
        const wrapper = shallow(
            <SideBarHeader/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Renders sidebar header with props.title=\'\'', () => {
        const wrapper = shallow(
            <SideBarHeader title=''/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Renders sidebar header with props.title="Sample Title"', () => {
        const wrapper = shallow(
            <SideBarHeader title='Sample Title'/>
        );
        expect(wrapper).toMatchSnapshot();
    });

}); 

