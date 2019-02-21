import * as React from 'react';
import styled from 'styled-components';
import { ICommonAttributes } from '../../../../../stores/DefaultData';
import { Colors } from '../../../../themes/Colors';

interface IWidthHeightInputs {
    values: ICommonAttributes;
}

const ModuleWrapper = styled.div`
    border: 1px dotted ${Colors.darkGrey};
    background: ${Colors.mediumDarkGrey};
    font-size: 12px;
    color: ${Colors.smokeWhite};
    display: grid;
    grid-auto-flow: row;
`;

const GridElements = styled.div`
    display: grid;
    grid-template-rows: 30px;
    align-items: center;
    justify-items: center;
`;

const BigGridElement = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const HorizontalElements = styled.div`
    display: grid;
    grid-template-rows: 30px;
    justify-items: center;
    align-items: center;
`;

const SingleHorizontalElement = styled(HorizontalElements)`
    grid-column: 2 / span 3;
    background: ${Colors.darkGrey};
`;

const StyledHorizontalElements = styled(HorizontalElements)`
    background: ${Colors.darkGrey};
`;

class MarginPaddingModule extends React.Component<IWidthHeightInputs> {
    public render() {
        return (
            <ModuleWrapper>
                <GridElements>-</GridElements>
                <BigGridElement>
                    <SingleHorizontalElement>-</SingleHorizontalElement>
                </BigGridElement>
                <BigGridElement>
                    <HorizontalElements>-</HorizontalElements>
                    <StyledHorizontalElements>-</StyledHorizontalElements>
                    <StyledHorizontalElements></StyledHorizontalElements>
                    <StyledHorizontalElements>-</StyledHorizontalElements>
                    <HorizontalElements>-</HorizontalElements>
                </BigGridElement>
                <BigGridElement>
                    <SingleHorizontalElement>-</SingleHorizontalElement>
                </BigGridElement>
                <GridElements>-</GridElements>
            </ModuleWrapper>
        )
    }
}

export { MarginPaddingModule };