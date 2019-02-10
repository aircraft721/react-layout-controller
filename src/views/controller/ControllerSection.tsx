import * as React from 'react';
import { ArrowIcon } from './ArrowIcon';
import styled from 'styled-components';

interface IControllerSection {
    isLayoutSectionOpen: boolean;
    isTypographySectionOpen: boolean;
    onClickToggleLayoutSection?(): void;
    onClickToggleTypographySection?(): void;
}

const ControllerWrapper = styled.div`
    padding-right: 30px;
    transition: all 0.5s ease;
`;

const LayoutSection = styled.div`
    height: 4em;
    justify-content: space-between;
    padding: 0px 20px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    background: ${(props: { isLayoutSectionOpen: boolean }) => props.isLayoutSectionOpen ? '#0684EE' : '#0186FE'};
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #0583EE
    };
`;

const TypographySection = styled.div`
    height: 4em;
    justify-content: space-between;
    padding: 0px 20px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    background: ${(props: { isTypographySectionOpen: boolean }) => props.isTypographySectionOpen ? '#0684EE' : '#0186FE'};
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: #0583EE
    };
`;

const StyledTitle = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: white;
`;

const ControllerSection = (props: IControllerSection) => {
    return (
        <ControllerWrapper>
            <LayoutSection 
                isLayoutSectionOpen={props.isLayoutSectionOpen}
                onClick={props.onClickToggleLayoutSection}
            >
                <StyledTitle>Layout</StyledTitle>
                {props.isLayoutSectionOpen ? 
                <ArrowIcon 
                    rotate={0} 
                    height={15} 
                    width={15} 
                /> : 
                <ArrowIcon 
                    rotate={270} 
                    height={15} 
                    width={15}
                />}
            </LayoutSection>
            <TypographySection
                isTypographySectionOpen={props.isTypographySectionOpen}
                onClick={props.onClickToggleTypographySection}
            >
                <StyledTitle>Typography</StyledTitle>
                {props.isTypographySectionOpen ? 
                <ArrowIcon 
                    rotate={0} 
                    height={15} 
                    width={15} 
                /> : 
                <ArrowIcon 
                    rotate={270} 
                    height={15} 
                    width={15}
                />}
            </TypographySection>
        </ControllerWrapper>
    )
}

export { ControllerSection };