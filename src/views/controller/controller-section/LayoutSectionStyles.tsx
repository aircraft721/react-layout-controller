import styled from 'styled-components';
import { Colors } from '../../themes/Colors';

export const SectionContent = styled.div`
    padding: 15px;
    margin-bottom: 1px;
    color: ${Colors.white};
    background: ${Colors.mediumDarkGrey};
`;

export const LayoutSettings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${Colors.greyBlue};
    padding: 5px 13px 5px 13px;
    position: relative;
`;

export const SettingsTitle = styled.div`
    color: ${Colors.smokeWhite};
    font-size: 12px;
    position: absolute;
    top: -8px;
`;