import * as React from 'react';
import styled from 'styled-components';
import { IBlock, IInline, INone, IFlex } from '../../../stores/DefaultData';
import { observer } from 'mobx-react';
import { CommonInputs } from './CommonInputs';
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
            <LayoutInputsWrapper>
                <Formik
                    initialValues={this.props.data}
                    onSubmit={() => {}}
                    render={(({ values }) => {
                        switch(this.props.data.display) {
                            case 'block': 
                                return (
                                    <CommonInputs values={values} />
                                );
                            case 'inline': 
                                return (
                                    <CommonInputs values={values} />
                                );
                            case 'flex': 
                                return (
                                    <CommonInputs values={values} />
                                );
                            case 'grid': 
                                return (
                                    <CommonInputs values={values} />
                                );
                            case 'none': 
                                return (
                                    <></>
                                );
                        }
                    })}
                />
            </LayoutInputsWrapper>
        )
    }
}

export { LayoutInputs };