import React from 'react';
import styled from 'styled-components';

import Map from './components/Map';
import List from './components/List'

const HorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function App() {
    return (
        <HorizontalContainer>
            <List/>
            <Map/>
        </HorizontalContainer>
    );
}
