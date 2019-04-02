import * as React from 'react';
import styled from 'styled-components';
import { LayoutSectionContent } from './controller-section/layout/LayoutSectionContent';
import { TypographySectionContent } from './controller-section/typography/TypographySectionContent';
import { BackgroundSectionContent } from './controller-section/background/BackgroundSectionContent';
import { ControllerStore } from '../../stores/ControllerStore';
import { Colors } from '../themes/Colors';
import { observer } from 'mobx-react';

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
    background: ${Colors.darkGrey};
`;

const TypographySection = styled.div`
    height: 4em;
    justify-content: flex-start;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1px;
    background: ${Colors.darkGrey};
`;

const BackgroundSection = styled.div`
    height: 4em;
    justify-content: flex-start;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1px;
    background: ${Colors.darkGrey};
`;

const StyledTitleLayout = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: ${(props: { isLayoutSectionOpen: boolean }) => props.isLayoutSectionOpen ? `${Colors.green}` : `${Colors.greyWhite}`};
`;

const StyledTitleTypography = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: ${(props: { isTypographySectionOpen: boolean }) => props.isTypographySectionOpen ? `${Colors.green}` : `${Colors.greyWhite}`};
`;

const StyledTitleBackground = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: ${(props: { isBackgroundSectionOpen: boolean }) => props.isBackgroundSectionOpen ? `${Colors.green}` : `${Colors.greyWhite}`};
`;

const StyledPoint = styled.div`
    height: 3px;
    width: 3px;
    border-radius: 50%;
    background: ${Colors.green};
    margin-left: 10px;
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


const ControllerSection = observer((props: IControllerSection) => (
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
                <BackgroundSectionContent 
                    controllerStore={props.controllerStore}
                />
            }
        </ControllerWrapper>
    )
);

export { ControllerSection };