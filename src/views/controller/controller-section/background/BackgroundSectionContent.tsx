import * as React from 'react';
import { SectionContent, LayoutSettings, SettingsTitle } from '../LayoutSectionStyles';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { ControllerStore } from '../../../../stores/ControllerStore';

interface IBackgroundSectionContent {
    controllerStore: ControllerStore;
}

const SketchPickerWrapper = styled(SketchPicker)`
    margin: 10px 0;
`;


@observer
class BackgroundSectionContent extends React.Component<IBackgroundSectionContent> {
    state = {
        backgroundColor: 'transparent'
    }

    public handleChangeComplete = async (color: any) => {
        await this.setState({ 
            backgroundColor: color.hex
        });
        this.props.controllerStore.setBackgroundColor(this.state.backgroundColor);
    }
    
    public render() {
        return (
            <SectionContent>
                <LayoutSettings>
                    <SettingsTitle>Background Settings</SettingsTitle>
                    <SketchPickerWrapper 
                        presetColors={[]} 
                        disableAlpha={true}
                        color={ this.state.backgroundColor }
                        onChangeComplete={ this.handleChangeComplete }
                    />
                </LayoutSettings> 
            </SectionContent>
        )
    }
}

export { BackgroundSectionContent }