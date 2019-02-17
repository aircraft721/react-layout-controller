import * as React from 'react';
import styled from 'styled-components';
import { ICommonAttributes } from '../../../stores/DefaultData';
import { Colors } from '../../themes/Colors';
import { Field } from 'formik';

interface ICommonInputs {
    values: ICommonAttributes;
}

const StyledField = styled(Field)`
    margin-left: 5px;
    width: 40%;
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
`;

const StyledLabel = styled.label`
    font-size: 12px;
`;

class CommonInputs extends React.Component<ICommonInputs> {
    render() {
        const { values } = this.props;
        return (
            <>
                <FieldWrapper>
                    <InputWrapper style={{marginRight: '5px'}}>
                        <StyledLabel>Width:</StyledLabel>
                        <StyledField 
                            placeholder={values.width}
                            type="text"
                            name="width"
                            value={values.width}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledLabel>Height:</StyledLabel>
                        <StyledField 
                            placeholder={values.height}
                            type="text"
                            name="height"
                            value={values.height}
                        />
                    </InputWrapper>
                </FieldWrapper>
                <FieldWrapper>
                    <InputWrapper style={{marginRight: '5px'}}>
                        <StyledLabel>Min:</StyledLabel>
                        <StyledField 
                            placeholder={values.minWidth}
                            type="text"
                            name="minWidth"
                            value={values.minWidth}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledLabel>Min:</StyledLabel>
                        <StyledField 
                            placeholder={values.minHeight}
                            type="text"
                            name="minHeight"
                            value={values.minHeight}
                        />
                    </InputWrapper>
                </FieldWrapper>
                <FieldWrapper>
                    <InputWrapper style={{marginRight: '5px'}}>
                        <StyledLabel>Max:</StyledLabel>
                        <StyledField 
                            placeholder={values.maxHeight}
                            type="text"
                            name="maxWidth"
                            value={values.maxWidth}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <StyledLabel>Max:</StyledLabel>
                        <StyledField 
                            placeholder={values.maxWidth}
                            type="text"
                            name="maxHeight"
                            value={values.maxHeight}
                        />
                    </InputWrapper>
                </FieldWrapper>
            </>  
        );
    }
}

export { CommonInputs };