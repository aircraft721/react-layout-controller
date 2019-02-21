import * as React from 'react';
import { SectionContent, LayoutSettings, SettingsTitle } from '../LayoutSectionStyles';
import styled from 'styled-components';
import { ControllerStore } from '../../../../stores/ControllerStore';
import { observer } from 'mobx-react';
import { Colors } from '../../../themes/Colors';
import { LayoutInputs } from './LayoutInputs';

interface ILayoutSectionContent {
    controllerStore: ControllerStore;
}

interface ILayoutState {
    isHovering: boolean;
}

const DisplayOptionsButtons = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    right: 1px;
`;

const DisplayButton = styled.button`
    height: 25px;
    margin-left: 1px;
    flex-basis: 20%;
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    box-shadow: ${(props: { isActive: boolean }) => props.isActive ? `inset 0px 0px 1px 1px rgba(63,66,71,1)` : `none`};
    background: ${(props: { isActive: boolean }) => props.isActive ? `${Colors.buttonGrey}` : `${Colors.smokeGrey}`};
    &:first-child {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }
    &:last-child {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }
`;

const SettingTitleWrapper = styled(SettingsTitle)`
    position: absolute;
    top: -8px;
`;

@observer
class LayoutSectionContent extends React.Component<ILayoutSectionContent, ILayoutState> {
    // constructor(props: ILayoutSectionContent){
    //     super(props)
    //     this.state = {
    //         isHovering: false
    //     }
    // }

    // public showTooltip = () => {
    //     this.setState({
    //         isHovering: true
    //     })
    // }

    // public hideTooltip = () => {
    //     this.setState({
    //         isHovering: false
    //     })
    // }
    
    public toggle = (index: number) => {
        this.props.controllerStore.toggleDisplayOptionsButtons(index);
    }

    public displayLayoutType = (key: string) => {
        this.props.controllerStore.displayLayoutType(key);
    }

    public render() {
        return (
            <SectionContent>
                <LayoutSettings>
                    <SettingTitleWrapper>Display Settings</SettingTitleWrapper>
                    <DisplayOptionsButtons>
                        {this.props.controllerStore.buttonObject.map((data, index) => {
                            return (
                                <DisplayButton 
                                    key={index}
                                    isActive={data.isActive}
                                    onClick={() => {
                                        this.toggle(index);
                                        this.displayLayoutType(data.name); 
                                    }}
                                >
                                    <img src={data.src} alt={data.name}/>
                                </DisplayButton>
                            )
                        })}
                    </DisplayOptionsButtons>
                    <LayoutInputs data={this.props.controllerStore.layoutType} />
                </LayoutSettings> 
            </SectionContent>
        )
    }
}

export { LayoutSectionContent };