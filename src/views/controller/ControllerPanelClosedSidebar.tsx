import * as React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SidebarPadding = styled.div`
    padding: 20px;
`;

class ControllerPanelClosedSidebar extends React.Component {
    render() {
        return (
            <SidebarWrapper>
                <SidebarPadding>
                    <img src='../../../public/images/layout.png' alt='layout' />
                </SidebarPadding>
                <SidebarPadding>
                    <img src='../../../public/images/edit.png' alt='typography' />
                </SidebarPadding>
                <SidebarPadding>
                    <img src='../../../public/images/picture.png' alt='background' />
                </SidebarPadding>
            </SidebarWrapper>
        );
    }
}

export { ControllerPanelClosedSidebar };