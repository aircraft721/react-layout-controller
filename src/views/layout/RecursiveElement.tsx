import * as React from 'react';
import styled from 'styled-components';
import { IArrayOfHtmlElements } from '../../stores/DefaultData';
import { Draggable } from 'react-beautiful-dnd';

interface IRecursive {
    arrayOfHtmlElements: IArrayOfHtmlElements;
    onDoubleClickDelete(id: string): void;
    index: number;
}

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

export const RecursiveElement: React.SFC<IRecursive> = props => {
    const { arrayOfHtmlElements, index } = props;

    return (
        <Draggable draggableId={arrayOfHtmlElements._id} index={index}>
            {(provided) => (
                <StyledElement
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
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
                        {arrayOfHtmlElements.childElements !== undefined ? arrayOfHtmlElements.childElements.map((child, index) => {
                            return (
                                <RecursiveElement
                                    index={index}
                                    key={child._id}
                                    arrayOfHtmlElements={child}
                                    onDoubleClickDelete={() => props.onDoubleClickDelete(child._id)}
                                />
                            )
                        }): null}
                        {arrayOfHtmlElements._id}
                    </>
            </StyledElement>
            )}
        </Draggable>
    )
}
