import * as React from 'react';
import { SectionContent, LayoutSettings, SettingsTitle } from './LayoutSectionStyles';
import styled from 'styled-components';
import { ControllerStore } from '../../../stores/ControllerStore';
import { observer } from 'mobx-react';

interface ILayoutSectionContent {
    controllerStore: ControllerStore;
}

const DisplayOptionsButtons = styled.div`
    display: flex;
    width: 100%;
`;

const DisplayButton = styled.button`
    height: 20px;
    margin-left: 1px;
    flex-basis: 20%;
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    background: ${(props: { isActive: boolean }) => props.isActive ? 'red' : 'white'};
    &:active {
        background: ${(props: { isActive: boolean }) => props.isActive ? 'red' : 'white'};
    }
`;

const SettingTitleWrapper = styled(SettingsTitle)`
    position: absolute;
    top: -8px;
`;

@observer
class LayoutSectionContent extends React.Component<ILayoutSectionContent> {
    constructor(props: ILayoutSectionContent){
        super(props)
    }

    public toggle = (index: number) => {
        this.props.controllerStore.toggleDisplayOptionsButtons(index);
    }

    public render() {
        return (
            <SectionContent>
                <LayoutSettings>
                    <SettingTitleWrapper>Display Setting</SettingTitleWrapper>
                    <DisplayOptionsButtons>
                        {this.props.controllerStore.buttonObject.map((data, index) => {
                            return (
                                <DisplayButton 
                                    key={index}
                                    isActive={data.isActive}
                                    onClick={() => this.toggle(index)}
                                >
                                    {data.display}
                                </DisplayButton>
                            )
                        })}
                    </DisplayOptionsButtons>
                </LayoutSettings> 
            </SectionContent>
        )
    }
}

export { LayoutSectionContent };