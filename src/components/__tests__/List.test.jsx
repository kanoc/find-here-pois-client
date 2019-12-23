import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import List from '../List';

const mockStore = configureStore([]);

describe('ConnectedList component', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            bbox: [],
            selectedId: '',
            hotels: [
                {
                    id: '123',
                    title: 'Foo1',
                    rating: 1,
                },
                {
                    id: '456',
                    title: 'Foo2',
                    rating: 2,
                },
            ],
        });
        component = renderer.create(
            <Provider store={store}>
                <List/>
            </Provider>
        );
    });

    it('renders correctly', () => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
