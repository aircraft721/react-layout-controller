import * as React from 'react';
import { SectionContent, LayoutSettings, SettingsTitle } from '../LayoutSectionStyles';
import { ControllerStore } from '../../../../stores/ControllerStore';
import { observer } from 'mobx-react';
import { LayoutInputs } from './LayoutInputs';

interface ILayoutSectionContent {
    controllerStore: ControllerStore;
}

interface ILayoutState {
    isHovering: boolean;
}

@observer
class LayoutSectionContent extends React.Component<ILayoutSectionContent, ILayoutState> {
    public toggle = (index: number) => {
        this.props.controllerStore.toggleDisplayOptionsButtons(index);
    }

    public displayLayoutType = (key: string) => {
        this.props.controllerStore.displayLayoutType(key);
    }

    public setInputData = (data: any) => {
        this.props.controllerStore.setInputData(data);
    }

    public render() {
        return (
            <SectionContent>
                <LayoutSettings>
                    <SettingsTitle>Display Settings</SettingsTitle>
                    <LayoutInputs 
                        data={this.props.controllerStore.layoutType} 
                        buttonData={this.props.controllerStore.defautButtonObject}
                        toggleDisplayOptionsButtons={this.props.controllerStore.toggleDisplayOptionsButtons}
                        displayLayoutType={this.props.controllerStore.displayLayoutType}
                        setInputData={this.setInputData}
                    />
                </LayoutSettings> 
            </SectionContent>
        )
    }
}

export { LayoutSectionContent };