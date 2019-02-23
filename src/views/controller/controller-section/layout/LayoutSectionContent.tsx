import * as React from 'react';
import { SectionContent, LayoutSettings, SettingsTitle } from '../LayoutSectionStyles';
import styled from 'styled-components';
import { ControllerStore } from '../../../../stores/ControllerStore';
import { observer } from 'mobx-react';
import { LayoutInputs } from './LayoutInputs';

interface ILayoutSectionContent {
    controllerStore: ControllerStore;
}

interface ILayoutState {
    isHovering: boolean;
}

const SettingTitleWrapper = styled(SettingsTitle)`
    position: absolute;
    top: -8px;
`;

@observer
class LayoutSectionContent extends React.Component<ILayoutSectionContent, ILayoutState> {
    public toggle = (index: number) => {
        this.props.controllerStore.toggleDisplayOptionsButtons(index);
    }

    public displayLayoutType = (key: string) => {
        this.props.controllerStore.displayLayoutType(key);
    }

    public setDataFromFormik = (data: any) => {
        this.props.controllerStore.setDataFromFormik(data);
    }

    public render() {
        return (
            <SectionContent>
                <LayoutSettings>
                    <SettingTitleWrapper>Display Settings</SettingTitleWrapper>
                    <LayoutInputs 
                        data={this.props.controllerStore.layoutType} 
                        buttonData={this.props.controllerStore.defautButtonObject}
                        toggleDisplayOptionsButtons={this.props.controllerStore.toggleDisplayOptionsButtons}
                        displayLayoutType={this.props.controllerStore.displayLayoutType}
                        setDataFromFormik={this.props.controllerStore.setDataFromFormik}
                    />
                </LayoutSettings> 
            </SectionContent>
        )
    }
}

export { LayoutSectionContent };