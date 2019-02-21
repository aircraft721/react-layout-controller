import * as React from 'react';
import styled from 'styled-components';
import { ICommonAttributes } from '../../../../../stores/DefaultData';
import { Colors } from '../../../../themes/Colors';
import { Field } from 'formik';

interface IWidthHeightInputs {
    values: ICommonAttributes;
}

const StyledField = styled(Field)`
    margin-left: 5px;
    width: 45%;
    height: 20px;
    padding: 0;
    outline-width: thin;
    border-radius: 2px;
    outline-color: ${Colors.green};
    border: 1px solid ${Colors.darkGrey};
    background: ${Colors.mediumDarkGrey};
    color: ${Colors.smokeWhite};
`;

const FieldWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 50%;
    :first-child {
        position: relative;
        right: 10px;
    }
`;

const StyledLabel = styled.label`
    font-size: 12px;
`;

const StyledWrapper = styled.div`
    margin-bottom: 13px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Colors.mediumDarkGrey};
`;

class WidthHeightInputs extends React.Component<IWidthHeightInputs> {
    render() {
        const { values } = this.props;
        return (
            <StyledWrapper>
                <FieldWrapper>
                    <InputWrapper>
                        <StyledLabel>Width:</StyledLabel>
                        <StyledField 
                            placeholder={values.width}
                            type="text"
                            name="width"
                            spellCheck="false"
                            value={values.width}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledLabel>Height:</StyledLabel>
                        <StyledField 
                            placeholder={values.height}
                            type="text"
                            name="height"
                            spellCheck="false"
                            value={values.height}
                        />
                    </InputWrapper>
                </FieldWrapper>
                <FieldWrapper>
                    <InputWrapper>
                        <StyledLabel>Min:</StyledLabel>
                        <StyledField 
                            placeholder={values.minWidth}
                            type="text"
                            name="minWidth"
                            spellCheck="false"
                            value={values.minWidth}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledLabel>Min:</StyledLabel>
                        <StyledField 
                            placeholder={values.minHeight}
                            type="text"
                            name="minHeight"
                            spellCheck="false"
                            value={values.minHeight}
                        />
                    </InputWrapper>
                </FieldWrapper>
                <FieldWrapper>
                    <InputWrapper>
                        <StyledLabel>Max:</StyledLabel>
                        <StyledField 
                            placeholder={values.maxHeight}
                            type="text"
                            name="maxWidth"
                            spellCheck="false"
                            value={values.maxWidth}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledLabel>Max:</StyledLabel>
                        <StyledField 
                            placeholder={values.maxWidth}
                            type="text"
                            name="maxHeight"
                            spellCheck="false"
                            value={values.maxHeight}
                        />
                    </InputWrapper>
                </FieldWrapper>
            </StyledWrapper>  
        );
    }
}

export { WidthHeightInputs };