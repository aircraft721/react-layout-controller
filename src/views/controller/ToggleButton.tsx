import * as React from 'react';
import styled from 'styled-components';
import { ArrowIcon } from './ArrowIcon';
import { RemoveIcon } from './RemoveIcon';

interface IToggleButton {
    isControllerPanelOpen: boolean;
    onClickToggle?(): void;
}

const ButtonWrapper = styled.button`
    align-self: flex-end;
    padding: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50%;
    outline: none;
    border: none;
`;

const ToggleButton = (props: IToggleButton) => {
    return (
        <>  
            <ButtonWrapper onClick={props.onClickToggle}>
                {props.isControllerPanelOpen ? <RemoveIcon /> : <ArrowIcon rotate={90} height={20} width={20}/>}
            </ButtonWrapper>
        </>
    );
}

export { ToggleButton };