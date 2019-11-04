import React from 'react';
import { shallow } from 'enzyme';
import { Watch } from '../Watch';

describe('Watch', () => {
    test('renderes', () =>{
        const wrapper = shallow(
            <Watch />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
