import * as React from 'react';
import styled from 'styled-components';
import { IBlock, IInline, INone, IFlex, IButtonObject } from '../../../../stores/DefaultData';
import { observer } from 'mobx-react';
import { WidthHeightInputs } from './editing-components/WidthHeightInputs';
import { MarginPaddingModule } from './editing-components/MarginPaddingModule';
import { Formik, Field } from 'formik';
import { Colors } from '../../../themes/Colors';
import { Tooltip } from '../../helpers/Tooltip';

interface ILayoutInputs {
    data: IBlock | IInline | INone | IFlex;
    buttonData: IButtonObject[];
    displayLayoutType(key: string): void;
    toggleDisplayOptionsButtons(index: number): void;
    setInputData(data: any): void;
}

const LayoutInputsWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

const DisplayOptionsButtons = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`;

const DisplayButton = styled(Field)`
    height: 25px;
    margin-left: 1px;
    width: 100%;
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    box-shadow: ${(props: { disabled: boolean }) => props.disabled ? `inset 0px 0px 1px 1px rgba(63,66,71,1)` : `none`};
    background: ${(props: { disabled: boolean }) => props.disabled ? `${Colors.buttonGrey}` : `${Colors.smokeGrey}`};
    &:first-child {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }
    &:last-child {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }
    &:hover + [role="tooltip"] {
        display: block;
	    bottom: 120%;
    }
`;

const DisplayButtonWrapper = styled.div`
    display: flex;
    flex-basis: 20%;
`;


@observer
class LayoutInputs extends React.Component<ILayoutInputs> {

    public toggle = (index: number) => {
        this.props.toggleDisplayOptionsButtons(index);
    }

    public displayLayoutType = (key: string) => {
        this.props.displayLayoutType(key);
    }
    
    public switchData = (data: any, values: any) => {
        switch(data.display) {
            case 'block': 
                return (
                    <>
                        <WidthHeightInputs values={values} />
                        <MarginPaddingModule values={values} />
                    </>
                );
            case 'inline': 
                return (
                    <>
                        <WidthHeightInputs values={values} />
                        <MarginPaddingModule values={values} />
                    </>
                );
            case 'flex': 
                return (
                    <>
                        <WidthHeightInputs values={values} />
                        <MarginPaddingModule values={values} />
                    </>
                );
            case 'grid': 
                return (
                    <>
                        <WidthHeightInputs values={values} />
                        <MarginPaddingModule values={values} />
                    </>
                );
            case 'none': 
                return (
                    <></>
                );
            }
    }

    render() {
        return (
            <>
            {this.props.data &&
                <LayoutInputsWrapper>
                    <Formik
                        initialValues={this.props.data}
                        enableReinitialize={false}
                        onSubmit={() => {}}
                        render={(({ values }) => {
                            values.display = this.props.data.display;
                            this.props.setInputData(values);
                            console.log('values', this.props.data);
                            return (
                                <div>
                                    <DisplayOptionsButtons>
                                        {this.props.buttonData.map((data, index) => {
                                            return (
                                                <DisplayButtonWrapper key={index}>
                                                    <DisplayButton 
                                                        style={{backgroundImage: `url(${data.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'transparent'}}
                                                        name="display"
                                                        value={data.name}
                                                        type="button"
                                                        disabled={data.isActive}
                                                        onClick={() => {
                                                            this.toggle(index);
                                                            this.displayLayoutType(data.name); 
                                                        }}
                                                    />
                                                    <Tooltip text={data.name} />
                                                </DisplayButtonWrapper>
                                                
                                            )
                                        })}
                                    </DisplayOptionsButtons>
                                    {this.switchData(this.props.data, values)}
                                </div>
                            );
                        })}
                    /> 
                </LayoutInputsWrapper>
            }
            </>
        )
    }
}

export { LayoutInputs };