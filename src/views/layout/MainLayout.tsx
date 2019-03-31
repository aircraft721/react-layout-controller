import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { IArrayOfHtmlElements } from '../../stores/DefaultData';
import { RootStore } from '../../stores/RootStore';

interface IMainLayout {
    rootStore: RootStore;
}

const LayoutWrapper = styled.div`
    flex-grow: 1;
    background: goldenrod;
`;

const StyledElement = styled.div`
    display: ${(props: IArrayOfHtmlElements) => props.display};
    width: ${(props: IArrayOfHtmlElements) =>  props.width};
    height: ${(props: IArrayOfHtmlElements) => props.height};
    padding-top: ${(props: IArrayOfHtmlElements) => props.paddingTop};
    padding-bottom: ${(props: IArrayOfHtmlElements) => props.paddingBottom};
    padding-left: ${(props: IArrayOfHtmlElements) => props.paddingLeft};
    padding-right: ${(props: IArrayOfHtmlElements) => props.paddingRight};
    margin-top: ${(props: IArrayOfHtmlElements) => props.marginTop};
    margin-bottom: ${(props: IArrayOfHtmlElements) => props.marginBottom};
    margin-left: ${(props: IArrayOfHtmlElements) => props.marginLeft};
    margin-right: ${(props: IArrayOfHtmlElements) => props.marginRight};
    padding: ${(props: IArrayOfHtmlElements) => props.padding};
    margin: ${(props: IArrayOfHtmlElements) => props.margin};
    min-width: ${(props: IArrayOfHtmlElements) => props.minWidth};
    max-width: ${(props: IArrayOfHtmlElements) => props.maxWidth};
    max-height: ${(props: IArrayOfHtmlElements) => props.maxHeight};
    min-height: ${(props: IArrayOfHtmlElements) => props.minHeight};
    float: ${(props: IArrayOfHtmlElements) => props.float};
    overFlow: ${(props: IArrayOfHtmlElements) => props.overFlow};
    position: ${(props: IArrayOfHtmlElements) => props.position};
    background-color: ${(props: IArrayOfHtmlElements) => props.backgroundColor};
`;

@inject('rootStore')
@observer
class MainLayout extends React.Component<IMainLayout> {
    public async componentDidMount() {
        await this.props.rootStore.fetchDataStore.getElements();
    }

    public onDoubleClickDelete = (id: string) => {
        this.props.rootStore.fetchDataStore.deleteElement(id);
    }

    public render() {
        const { arrayOfHtmlElements } = this.props.rootStore.controllerStore;
        console.log(arrayOfHtmlElements)
        return (
            <LayoutWrapper>
                {arrayOfHtmlElements.map((element: IArrayOfHtmlElements, index: number) => {
                    return (
                        <StyledElement 
                            onClick={() => console.log('item', element._id)}
                            onDoubleClick={() => this.onDoubleClickDelete(element._id)}
                            key={index}
                            _id={element._id}
                            display={element.display}
                            width={element.width}
                            height={element.height}
                            paddingTop={element.paddingTop}
                            paddingBottom={element.paddingBottom}
                            paddingLeft={element.paddingLeft}
                            paddingRight={element.paddingRight}
                            marginTop={element.marginTop}
                            marginBottom={element.marginBottom}
                            marginLeft={element.marginLeft}
                            marginRight={element.marginRight}
                            padding={element.padding}
                            margin={element.margin}
                            minWidth={element.minWidth}
                            maxWidth={element.maxWidth}
                            maxHeight={element.maxHeight}
                            minHeight={element.minHeight}
                            float={element.float}
                            overFlow={element.overFlow}
                            position={element.position}
                            backgroundColor={element.backgroundColor}
                        >
                            {element._id}
                        </StyledElement>
                    )
                })}
            </LayoutWrapper>
        );
    }
}

export { MainLayout };