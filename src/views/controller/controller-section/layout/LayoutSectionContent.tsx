import * as React from 'react';
import { SectionContent, LayoutSettings, SettingsTitle } from '../LayoutSectionStyles';
import { ControllerStore } from '../../../../stores/ControllerStore';
import { observer } from 'mobx-react';
import { LayoutInputs } from './LayoutInputs';
import { LocalStorageStore } from '../../../../stores/LocalStorageStore';

interface ILayoutSectionContent {
    controllerStore: ControllerStore;
    localStorageStore: LocalStorageStore;
}

interface ILayoutState {
    isHovering: boolean;
}

@observer
class LayoutSectionContent extends React.Component<ILayoutSectionContent, ILayoutState> {
    public toggle = (index: number) => {
        this.props.localStorageStore.toggleDisplayOptionsButtons(index);
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
                        buttonData={this.props.localStorageStore.defautButtonObject}
                        toggleDisplayOptionsButtons={this.props.localStorageStore.toggleDisplayOptionsButtons}
                        displayLayoutType={this.props.controllerStore.displayLayoutType}
                        setInputData={this.setInputData}
                    />
                </LayoutSettings> 
            </SectionContent>
        )
    }
}

export { LayoutSectionContent };