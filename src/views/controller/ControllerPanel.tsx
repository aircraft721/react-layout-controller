import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { ControllerStore } from '../../stores/ControllerStore';
import { ToggleButton } from './helpers/ToggleButton';
import { ControllerSection } from './ControllerSection';
import { Colors } from '../themes/Colors';
import { ControllerPanelClosedSidebar } from './ControllerPanelClosedSidebar';

interface IController {
    controllerStore: ControllerStore;
}

export const StyledRightPanel = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.darkGrey};
    flex-basis: ${(props: { isControllerPanelOpen: boolean }) => props.isControllerPanelOpen ? '290px' : '60px'};
    transition: all 0.3s ease;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    background-color: transparent;
    };
    ::-webkit-scrollbar {
        width: 7px;
	    background-color: transparent;
    };
    ::-webkit-scrollbar-thumb {
        background-color: ${Colors.greyBlue};
        border-radius: 10px;
    }
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
            <StyledRightPanel isControllerPanelOpen={isControllerPanelOpen}>
                <ToggleButton 
                    onClickToggle={this.onClickToggle}
                    isControllerPanelOpen={isControllerPanelOpen}
                />
                {isControllerPanelOpen ? 
                    <ControllerSection 
                        controllerStore={this.props.controllerStore}
                        isLayoutSectionOpen={isLayoutSectionOpen}
                        isTypographySectionOpen={isTypographySectionOpen}
                        isBackgroundSectionOpen={isBackgroundSectionOpen}
                        onClickToggleLayoutSection={this.onClickToggleLayoutSection}
                        onClickToggleTypographySection={this.onClickToggleTypographySection}
                        onClickToggleBackgroundSection={this.onClickToggleBackgroundSection}
                    />
                :
                    <ControllerPanelClosedSidebar />
                }
            </StyledRightPanel>
        );
    }
}

export { ControllerPanel };