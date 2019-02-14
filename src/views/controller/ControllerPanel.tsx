import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { ControllerStore } from '../../stores/ControllerStore';
import { ToggleButton } from './ToggleButton';
import { ControllerSection } from './ControllerSection';

interface IController {
    controllerStore: ControllerStore;
}

const ControllerWrapper = styled.div`
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    background-color: #27292C;
    flex-basis: ${(props: { isControllerPanelOpen: boolean }) => props.isControllerPanelOpen ? '270px' : '50px'};
    transition: all 0.3s ease;
    height: 100vh;
`;

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SidebarPadding = styled.div`
    padding: 20px;
`;

@inject('controllerStore')
@observer
class ControllerPanel extends React.Component<IController> {
    public onClickToggle = () => {
        this.props.controllerStore.toggleControllerPanel();
    }

    public onClickToggleLayoutSection = () => {
        this.props.controllerStore.toggleLayoutSection();
    }

    public onClickToggleTypographySection = () => {
        this.props.controllerStore.toggleTypographySection();
    }

    public onClickToggleBackgroundSection = () => {
        this.props.controllerStore.toggleBackgroundSection();
    }

    render() {
        const { 
            isControllerPanelOpen, 
            isLayoutSectionOpen,
            isTypographySectionOpen,
            isBackgroundSectionOpen
        } = this.props.controllerStore;

        return (
            <ControllerWrapper isControllerPanelOpen={isControllerPanelOpen}>
                <ToggleButton 
                    onClickToggle={this.onClickToggle}
                    isControllerPanelOpen={isControllerPanelOpen}
                />
                {isControllerPanelOpen === false && 
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
                }
                {isControllerPanelOpen && 
                    <ControllerSection 
                        controllerStore={this.props.controllerStore}
                        isLayoutSectionOpen={isLayoutSectionOpen}
                        isTypographySectionOpen={isTypographySectionOpen}
                        isBackgroundSectionOpen={isBackgroundSectionOpen}
                        onClickToggleLayoutSection={this.onClickToggleLayoutSection}
                        onClickToggleTypographySection={this.onClickToggleTypographySection}
                        onClickToggleBackgroundSection={this.onClickToggleBackgroundSection}
                    />
                }
            </ControllerWrapper>
        );
    }
}

export { ControllerPanel };