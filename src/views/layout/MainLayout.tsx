import * as React from 'react';
import styled from 'styled-components';
import { ControllerStore } from '../../stores/ControllerStore';
import { observer, inject } from 'mobx-react';

const LayoutWrapper = styled.div`
    flex-grow: 1;
    background: goldenrod;
`;

interface IMainLayout {
    controllerStore: ControllerStore;
}

@inject('controllerStore')
@observer
class MainLayout extends React.Component<IMainLayout> {
    render() {
        const { arrayOfHtmlElements } = this.props.controllerStore
        console.log(arrayOfHtmlElements)
        return (
            <LayoutWrapper>
                Main Layout
                {arrayOfHtmlElements.map((element, index) => {
                    return (
                        <div key={index}>{element.width}</div>
                    )
                })}
            </LayoutWrapper>
        );
    }
}

export { MainLayout };