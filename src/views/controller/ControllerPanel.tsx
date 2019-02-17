import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { ControllerStore } from '../../stores/ControllerStore';
import { ToggleButton } from './ToggleButton';
import { ControllerSection } from './ControllerSection';
import { Colors } from '../themes/Colors';
import { ControllerPanelClosedSidebar } from './ControllerPanelClosedSidebar';

interface IController {
    controllerStore: ControllerStore;
}

const ControllerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.darkGrey};
    flex-basis: ${(props: { isControllerPanelOpen: boolean }) => props.isControllerPanelOpen ? '270px' : '50px'};
    transition: all 0.3s ease;
    height: 100vh;
    /* overflow-x: auto;
    :-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    background-color: #F5F5F5;
    };
    :-webkit-scrollbar {
        width: 10px;
	    background-color: #F5F5F5;
    };
    :-webkit-scrollbar-thumb {
        background-color: #000000;
	    border: 2px solid #555555;
    } */
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
            </ControllerWrapper>
        );
    }
}

export { ControllerPanel };