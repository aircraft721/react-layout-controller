import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { IArrayOfHtmlElements } from '../../stores/DefaultData';
import { Colors } from '../themes/Colors';
import { ControllerStore } from '../../stores/ControllerStore';

interface IMainLayout {
    property?: string | boolean | number;
    controllerStore: ControllerStore;
    getElements(): void;
    deleteElement(id: string): void;
}

interface IRecursive {
    arrayOfHtmlElements: IArrayOfHtmlElements;
    onDoubleClickDelete(id: string): void;
}

const LayoutWrapper = styled.div`
    flex-grow: 1;
    background: goldenrod;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    background-color: transparent;
    };
    ::-webkit-scrollbar {
        width: 7px;
	    background-color: transparent;
    };
    ::-webkit-scrollbar-thumb {
        background-color: ${Colors.greyBlue};
        border-radius: 10px;
    }
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

const RecursiveElement: React.SFC<IRecursive> = props => {
    const { arrayOfHtmlElements } = props;

    return (
        <>
            <StyledElement 
                childElements={[]}
                onDoubleClick={() => props.onDoubleClickDelete(arrayOfHtmlElements._id)}
                onClick={() => console.log('id', arrayOfHtmlElements._id)}
                _id={arrayOfHtmlElements._id}
                display={arrayOfHtmlElements.display}
                width={arrayOfHtmlElements.width}
                height={arrayOfHtmlElements.height}
                paddingTop={arrayOfHtmlElements.paddingTop}
                paddingBottom={arrayOfHtmlElements.paddingBottom}
                paddingLeft={arrayOfHtmlElements.paddingLeft}
                paddingRight={arrayOfHtmlElements.paddingRight}
                marginTop={arrayOfHtmlElements.marginTop}
                marginBottom={arrayOfHtmlElements.marginBottom}
                marginLeft={arrayOfHtmlElements.marginLeft}
                marginRight={arrayOfHtmlElements.marginRight}
                padding={arrayOfHtmlElements.padding}
                margin={arrayOfHtmlElements.margin}
                minWidth={arrayOfHtmlElements.minWidth}
                maxWidth={arrayOfHtmlElements.maxWidth}
                maxHeight={arrayOfHtmlElements.maxHeight}
                minHeight={arrayOfHtmlElements.minHeight}
                float={arrayOfHtmlElements.float}
                overFlow={arrayOfHtmlElements.overFlow}
                position={arrayOfHtmlElements.position}
                backgroundColor={arrayOfHtmlElements.backgroundColor}
            >
                <>
                    {arrayOfHtmlElements.childElements !== undefined ? arrayOfHtmlElements.childElements.map(child => {
                        return (
                            <RecursiveElement
                                key={child._id}
                                arrayOfHtmlElements={child}
                                onDoubleClickDelete={() => props.onDoubleClickDelete(child._id)}
                            />
                        )
                    }): null}
                </>
                       
            </StyledElement>
        </>
    )
}


@inject('rootStore')
@observer
class MainLayout extends React.Component<IMainLayout> {
    public async componentDidMount() {
        await this.props.getElements();
    }

    public onDoubleClickDelete = (id: string) => {
        this.props.deleteElement(id);
    }

    public render() {
        const { arrayOfHtmlElements } = this.props.controllerStore;

        return (
            <LayoutWrapper>
                {arrayOfHtmlElements.map(child => {
                    return (
                        <RecursiveElement 
                            key={child._id}
                            onDoubleClickDelete={this.onDoubleClickDelete}
                            arrayOfHtmlElements={child}
                        />
                    )
                })}
            </LayoutWrapper>
        );
    }
}

export { MainLayout };