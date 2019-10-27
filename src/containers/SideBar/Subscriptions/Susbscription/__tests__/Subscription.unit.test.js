import React from 'react';
import { shallow } from 'enzyme';
import Subscription from '../Subscription';

describe('Subscription', () => {

    test('Renders empty subscription', () => {
        const wrapper = shallow(
            <Subscription />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Renders breadcasting subscription', () => {
        const wrapper = shallow(
            <Subscription broadcasting label='Kanywest'/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Renders non-breadcasting subscription with new videos', () => {
        const wrapper = shallow(
            <Subscription label='Halsey Music' amountNewVideos={8}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

});

