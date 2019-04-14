import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../themes/Colors';

interface ITooltip {
    text: string;
}

const TooltipWrapper = styled.div`
    position: absolute;
    width: 58px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    border-radius: 4px;
    background: ${Colors.darkGrey};
    text-transform: capitalize;
    color: ${Colors.white};
    display: none;
    text-align: center;
    animation: fadeIn ease 400ms;
    @keyframes fadeIn{
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }
    &::after {
        content: '';
        position: absolute;
        background: ${Colors.darkGrey};
        width: 8px;
        height: 8px;
        bottom: -3px;
        left: 20px;
        transform: rotate(45deg);
    }
`;

export class Tooltip extends React.Component<ITooltip> {
    render() {
        return (
            <TooltipWrapper id="tooltip" role="tooltip">
                {this.props.text}
            </TooltipWrapper>
        )
    }
}