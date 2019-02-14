import * as React from 'react';
import styled from 'styled-components';
import { LayoutSectionContent } from './controller-section/LayoutSectionContent';
import { TypographySectionContent } from './controller-section/TypographySectionContent';
import { BackgroundSectionContent } from './controller-section/BackgroundSectionContent';
import { ControllerStore } from '../../stores/ControllerStore';

interface IControllerSection {
    controllerStore: ControllerStore;
    isLayoutSectionOpen: boolean;
    isTypographySectionOpen: boolean;
    isBackgroundSectionOpen: boolean;
    onClickToggleLayoutSection?(): void;
    onClickToggleTypographySection?(): void;
    onClickToggleBackgroundSection?(): void;
}

const ControllerWrapper = styled.div`
    transition: all 0.5s ease;
    background: black;
`;

const LayoutSection = styled.div`
    display: flex;
    height: 4em;
    padding: 0px 20px;
    cursor: pointer;
    margin-top: 1px;
    margin-bottom: 1px;
    background: #27292C;
`;

const TypographySection = styled.div`
    height: 4em;
    justify-content: flex-start;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1px;
    background: #27292C;
`;

const BackgroundSection = styled.div`
    height: 4em;
    justify-content: flex-start;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1px;
    background: #27292C;
`;

const StyledTitleLayout = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: ${(props: { isLayoutSectionOpen: boolean }) => props.isLayoutSectionOpen ? '#10D37C' : '#C5CACF'};
`;

const StyledTitleTypography = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: ${(props: { isTypographySectionOpen: boolean }) => props.isTypographySectionOpen ? '#10D37C' : '#C5CACF'};
`;

const StyledTitleBackground = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: ${(props: { isBackgroundSectionOpen: boolean }) => props.isBackgroundSectionOpen ? '#10D37C' : '#C5CACF'};
`;

const StyledPoint = styled.div`
    height: 3px;
    width: 3px;
    background: #10D37C;
    margin-left: 10px;
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


const ControllerSection = (props: IControllerSection) => {
    return (
        <ControllerWrapper>
            <LayoutSection 
                onClick={props.onClickToggleLayoutSection}
            >
                <TitleWrap>
                    <StyledTitleLayout isLayoutSectionOpen={props.isLayoutSectionOpen}>Layout</StyledTitleLayout>
                    {props.isLayoutSectionOpen && <StyledPoint />}
                </TitleWrap>
            </LayoutSection>
            {props.isLayoutSectionOpen &&
                <LayoutSectionContent 
                    controllerStore={props.controllerStore}
                />
            }
            <TypographySection
                onClick={props.onClickToggleTypographySection}
            >
                <StyledTitleTypography isTypographySectionOpen={props.isTypographySectionOpen}>Typography</StyledTitleTypography>
                {props.isTypographySectionOpen ? <StyledPoint /> : null}
            </TypographySection>
            {props.isTypographySectionOpen &&
                <TypographySectionContent />
            }
            <BackgroundSection
                onClick={props.onClickToggleBackgroundSection}
            >
                <StyledTitleBackground isBackgroundSectionOpen={props.isBackgroundSectionOpen}>Background</StyledTitleBackground>
                {props.isBackgroundSectionOpen ? <StyledPoint /> : null}
            </BackgroundSection>
            {props.isBackgroundSectionOpen &&
                <BackgroundSectionContent />
            }
        </ControllerWrapper>
    )
}

export { ControllerSection };