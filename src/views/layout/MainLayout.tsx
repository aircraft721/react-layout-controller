import * as React from 'react';
import styled from 'styled-components';

const MainLayoutWrapper = styled.div`
    max-width: 100%;
`;

class MainLayout extends React.Component {
    render() {
        return (
            <MainLayoutWrapper>
                Main Layout
            </MainLayoutWrapper>
        );
    }
}

export { MainLayout };