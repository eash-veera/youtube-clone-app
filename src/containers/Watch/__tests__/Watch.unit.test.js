import React from 'react';
import { shallow } from 'enzyme';
import { Watch } from '../Watch';

test('renderes <Watch /> with empty props', () =>{
    const wrapper = shallow(
        <Watch />
    );
    expect(wrapper).toMatchSnapshot();
});
