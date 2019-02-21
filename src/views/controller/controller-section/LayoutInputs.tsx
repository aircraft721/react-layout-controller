import * as React from 'react';
import styled from 'styled-components';
import { IBlock, IInline, INone, IFlex } from '../../../stores/DefaultData';
import { observer } from 'mobx-react';
import { WidthHeightInputs } from './editing-components/WidthHeightInputs';
import { MarginPaddingModule } from './editing-components/MarginPaddingModule';
import { Formik } from 'formik';

interface ILayoutInputs {
    data: IBlock | IInline | INone | IFlex;
}

const LayoutInputsWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    right: 1px;
`;


@observer
class LayoutInputs extends React.Component<ILayoutInputs> {
    render() {
        return (
            <>
            {this.props.data.display !== 'none' ? 
                <LayoutInputsWrapper>
                <Formik
                    initialValues={this.props.data}
                    onSubmit={() => {}}
                    render={(({ values }) => {
                        switch(this.props.data.display) {
                            case 'block': 
                                return (
                                    <>
                                        <WidthHeightInputs values={values} />
                                        <MarginPaddingModule values={values} />
                                    </>
                                );
                            case 'inline': 
                                return (
                                    <WidthHeightInputs values={values} />
                                );
                            case 'flex': 
                                return (
                                    <WidthHeightInputs values={values} />
                                );
                            case 'grid': 
                                return (
                                    <WidthHeightInputs values={values} />
                                );
                            case 'none': 
                                return (
                                    <></>
                                );
                        }
                    })}
                /> 
            </LayoutInputsWrapper>
            : null}
            </>
        )
    }
}

export { LayoutInputs };