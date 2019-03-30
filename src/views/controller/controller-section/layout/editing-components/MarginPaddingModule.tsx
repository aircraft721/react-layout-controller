import * as React from 'react';
import styled from 'styled-components';
import { ICommonAttributes } from '../../../../../stores/DefaultData';
import { Colors } from '../../../../themes/Colors';
import { Field } from 'formik';

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
    grid-template-columns: repeat(5, 1fr);
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

const StyledField = styled(Field)`
    width: 35px;
    border: none;
    outline-color: ${Colors.green};
    background: transparent;
    padding: 4px;
    text-align: center;
    color: ${Colors.smokeWhite};
    font-size: 12px;
`;

class MarginPaddingModule extends React.Component<IWidthHeightInputs> {
    public render() {
        const { values } = this.props;
        return (
            <ModuleWrapper>
                <GridElements>
                    <StyledField 
                        placeholder={values.marginTop === '' ? '-' : values.marginTop}
                        type="text"
                        name="marginTop"
                        spellCheck="false"
                        value={values.marginTop}
                    />
                </GridElements>
                <BigGridElement>
                    <SingleHorizontalElement>
                        <StyledField 
                            placeholder={values.paddingTop === '' ? '-' : values.paddingTop}
                            type="text"
                            name="paddingTop"
                            spellCheck="false"
                            value={values.paddingTop}
                        />
                    </SingleHorizontalElement>
                </BigGridElement>
                <BigGridElement>
                    <HorizontalElements>
                        <StyledField 
                            placeholder={values.marginLeft === '' ? '-' : values.marginLeft}
                            type="text"
                            name="marginLeft"
                            spellCheck="false"
                            value={values.marginLeft}
                        />
                    </HorizontalElements>
                    <StyledHorizontalElements>
                        <StyledField 
                            placeholder={values.paddingLeft === '' ? '-' : values.paddingLeft}
                            type="text"
                            name="paddingLeft"
                            spellCheck="false"
                            value={values.paddingLeft}
                        />
                    </StyledHorizontalElements>
                    <StyledHorizontalElements></StyledHorizontalElements>
                    <StyledHorizontalElements>
                        <StyledField 
                            placeholder={values.paddingRight === '' ? '-' : values.paddingRight}
                            type="text"
                            name="paddingRight"
                            spellCheck="false"
                            value={values.paddingRight}
                        />
                    </StyledHorizontalElements>
                    <HorizontalElements>
                        <StyledField 
                            placeholder={values.marginRight === '' ? '-' : values.marginRight}
                            type="text"
                            name="marginRight"
                            spellCheck="false"
                            value={values.marginRight}
                        />
                    </HorizontalElements>
                </BigGridElement>
                <BigGridElement>
                    <SingleHorizontalElement>
                        <StyledField 
                            placeholder={values.paddingBottom === '' ?  '-' : values.paddingBottom}
                            type="text"
                            name="paddingBottom"
                            spellCheck="false"
                            value={values.paddingBottom}
                        />
                    </SingleHorizontalElement>
                </BigGridElement>
                <GridElements>
                    <StyledField 
                        placeholder={values.marginBottom === '' ?  '-' : values.marginBottom}
                        type="text"
                        name="marginBottom"
                        spellCheck="false"
                        value={values.marginBottom}
                    />
                </GridElements>
            </ModuleWrapper>
        )
    }
}

export { MarginPaddingModule };