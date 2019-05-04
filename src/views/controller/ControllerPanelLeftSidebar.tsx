import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../themes/Colors';
import { observer, inject } from 'mobx-react';
import { RootStore } from '../../stores/RootStore';

interface IControllerPanelLeftSidebar {
    rootStore: RootStore;
}

const StyledLeftPanel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${Colors.darkGrey};
    flex-basis: 200px;
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

@inject('rootStore')
@observer
class ControllerPanelLeftSidebar extends React.Component<IControllerPanelLeftSidebar> {
    public setElementOnScreen = () => {
        const singleHtmlElement = this.props.rootStore.controllerStore.submitUserInputData();
        this.props.rootStore.fetchDataStore.addNewElement(singleHtmlElement);
    }

    public render() {
        return (
            <StyledLeftPanel>
                <button onClick={this.setElementOnScreen}>
                    Submit
                </button>  
            </StyledLeftPanel>
        )
    }
}

export { ControllerPanelLeftSidebar };