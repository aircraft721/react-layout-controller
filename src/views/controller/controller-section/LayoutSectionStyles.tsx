import styled from 'styled-components';
import { Colors } from '../../themes/Colors';

export const SectionContent = styled.div`
    padding: 20px 10px;
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
    padding: 15px 10px 0 15px;
    position: relative;
`;

export const SettingsTitle = styled.div`
    color: ${Colors.smokeWhite};
    font-size: 12px;
`;