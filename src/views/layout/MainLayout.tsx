import * as React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Colors } from '../themes/Colors';
import { ControllerStore } from '../../stores/ControllerStore';
import { RecursiveElement } from './RecursiveElement';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

interface IMainLayout {
    property?: string | boolean | number;
    controllerStore: ControllerStore;
    getElements(): void;
    deleteElement(id: string): void;
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


@inject('rootStore')
@observer
class MainLayout extends React.Component<IMainLayout> {
    public async componentDidMount() {
        await this.props.getElements();
    }

    public onDoubleClickDelete = (id: string) => {
        this.props.deleteElement(id);
    }

    public onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;
        console.log('res', result)
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
    }

    public render() {
        const { arrayOfHtmlElements } = this.props.controllerStore;

        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId={'1231231235'}>
                    {(provided) => (
                        <LayoutWrapper
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {arrayOfHtmlElements.map((child, index) => {
                                return (
                                    <RecursiveElement
                                        index={index}
                                        key={child._id}
                                        onDoubleClickDelete={this.onDoubleClickDelete}
                                        arrayOfHtmlElements={child}
                                    />
                                )
                            })}
                            {provided.placeholder}
                        </LayoutWrapper>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export { MainLayout };