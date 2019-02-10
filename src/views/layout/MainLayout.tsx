import * as React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
    flex-grow: 1;
    background: goldenrod;
`;

class MainLayout extends React.Component {
    render() {
        return (
            <LayoutWrapper>
                Main Layout
            </LayoutWrapper>
        );
    }
}

export { MainLayout };