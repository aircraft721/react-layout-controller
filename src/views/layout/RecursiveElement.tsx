import * as React from 'react';
import styled from 'styled-components';
import { IArrayOfHtmlElements } from '../../stores/DefaultData';
import { Colors } from '../../views/themes/Colors';

interface IRecursive {
    elementsArray: IArrayOfHtmlElements;
    onDoubleClickDelete(id: string): void;
}

interface IState {
    isActive: boolean;
}

interface IStyledElementWrapper {
    onMouseEnter(): void;
    onMouseLeave(): void;
    isTopLevelElement: boolean
}

interface IConditionalWrap {
    condition: boolean;
    wrap(children: JSX.Element): JSX.Element;
    children: JSX.Element;
}

const BorderWrapper = styled.div`
    box-shadow: 0px 0px 0px 1px ${Colors.oceanBlue};
    animation: fadeInBorder ease 300ms;
    @keyframes fadeInBorder{
        0% {
            box-shadow: 0px 0px 0px 1px transparent;
        }
        100% {
            box-shadow: 0px 0px 0px 1px ${Colors.oceanBlue};
        }
    }
    width: 100%;
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

const StyledElementWrapper = styled.div<IStyledElementWrapper>`
    width: 100%;
`;

const ConditionalWrap = ({ condition, wrap, children }: IConditionalWrap) => condition ? wrap(children) : <>{children}</>;

class RecursiveElement extends React.Component<IRecursive, IState> {
    constructor(props: IRecursive){
        super(props)
        this.state = {
            isActive: false
        }
    }

    public handleDragStart = (e: any, element: any) => {
        e.dataTransfer.setData('text/plain', element);
        console.log('element', element)
    }

    public handleDragEnd = (e: any, element: any) => {
        console.log('end');
    }

    public handleDragOver = (e:any) => {
        e.preventDefault();
        console.log('overr');
    }

    public handleDragEnter = () => {
        console.log('eneter');
    }

    public handleActive = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    public onMouseEnter = () => {
        this.setState({
            isActive: true
        })
    }

    public onMouseLeave = () => {
        this.setState({
            isActive: false
        })
    }

    public render() {
        const { elementsArray } = this.props;
        const { isTopLevelElement } = elementsArray;
        
        return (
            <ConditionalWrap
                condition={isTopLevelElement as boolean}
                wrap={(children: JSX.Element) => (
                    <StyledElementWrapper
                        isTopLevelElement={isTopLevelElement as boolean}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >           
                        {children}
                    </StyledElementWrapper>
                )}
            >
                <ConditionalWrap
                    condition={this.state.isActive}
                    wrap={(children: JSX.Element) => (
                        <BorderWrapper>           
                            {children}
                        </BorderWrapper>
                    )}
                >
                    <StyledElement
                        draggable={true}
                        onDragStart={(e) => this.handleDragStart(e, elementsArray._id)}
                        onDragEnd={(e) => this.handleDragEnd(e, elementsArray._id)}
                        onDragOver={this.handleDragOver}
                        onDragEnter={this.handleDragEnter}
                        childElements={[]}
                        onDoubleClick={() => this.props.onDoubleClickDelete(elementsArray._id)}
                        onClick={() => console.log('id', elementsArray._id)}
                        _id={elementsArray._id}
                        display={elementsArray.display}
                        width={elementsArray.width}
                        height={elementsArray.height}
                        paddingTop={elementsArray.paddingTop}
                        paddingBottom={elementsArray.paddingBottom}
                        paddingLeft={elementsArray.paddingLeft}
                        paddingRight={elementsArray.paddingRight}
                        marginTop={elementsArray.marginTop}
                        marginBottom={elementsArray.marginBottom}
                        marginLeft={elementsArray.marginLeft}
                        marginRight={elementsArray.marginRight}
                        padding={elementsArray.padding}
                        margin={elementsArray.margin}
                        minWidth={elementsArray.minWidth}
                        maxWidth={elementsArray.maxWidth}
                        maxHeight={elementsArray.maxHeight}
                        minHeight={elementsArray.minHeight}
                        float={elementsArray.float}
                        overFlow={elementsArray.overFlow}
                        position={elementsArray.position}
                        backgroundColor={elementsArray.backgroundColor}
                    >  
                        <>
                            {elementsArray.childElements !== undefined ? elementsArray.childElements.map((child) => {
                                return (
                                    <RecursiveElement
                                        key={child._id}
                                        elementsArray={child}
                                        onDoubleClickDelete={() => this.props.onDoubleClickDelete(child._id)}
                                    />
                                )
                            }): null}
                            {elementsArray._id}
                        </>
                    </StyledElement>
                </ConditionalWrap>
            </ConditionalWrap>
        )
    }
}

export { RecursiveElement };
