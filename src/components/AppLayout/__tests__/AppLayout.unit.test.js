import React from 'react';
import { shallow } from 'enzyme';
import { AppLayout } from '../AppLayout';

describe('AppLayout', () => {
    
    test('renders empty <AppLayout />', () => {
        const wrapper = shallow(
            <AppLayout />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders <AppLayout /> with one child', () => {
        const wrapper = shallow(
            <AppLayout>
                <div>Child 1</div>
            </AppLayout>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('renders <AppLayout /> with children', () => {
        const wrapper = shallow(
            <AppLayout>
                <div>Child 1</div>
                <div>
                    <div>Child 2</div>
                    <span>Child 3</span>
                </div>
            </AppLayout>
        );
        expect(wrapper).toMatchSnapshot();
    });
});