import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from '../ListItem';

it('renders correctly', () => {
    const onItemClick = () => {};
    const item = {
        title: 'Foo',
        rating: 2
    };
    const tree = renderer
        .create(<ListItem item={item} isSelected={false} onItemClick={onItemClick}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
