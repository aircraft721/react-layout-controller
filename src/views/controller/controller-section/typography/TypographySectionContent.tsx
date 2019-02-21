import * as React from 'react';
import { SectionContent, LayoutSettings, SettingsTitle } from '../LayoutSectionStyles';

class TypographySectionContent extends React.Component {
    public render() {
        return (
            <SectionContent>
                <LayoutSettings>
                    <SettingsTitle>Display Setting</SettingsTitle>
                </LayoutSettings> 
            </SectionContent>
        )
    }
}

export { TypographySectionContent }