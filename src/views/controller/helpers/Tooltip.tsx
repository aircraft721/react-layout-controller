import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../themes/Colors';

interface ITooltip {
    text: string;
}

const TooltipWrapper = styled.div`
    position: absolute;
    width: 50px;
    height: 20px;
    border-radius: 4px;
    background: ${Colors.green};
`;

export class Tooltip extends React.Component<ITooltip> {
    render() {
        return (
            <TooltipWrapper>
                {this.props.text}
            </TooltipWrapper>
        )
    }
}