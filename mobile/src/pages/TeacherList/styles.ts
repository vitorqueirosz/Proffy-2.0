import styled from 'styled-components/native';

import {Picker} from '@react-native-community/picker';

export const Container = styled.View`

`;
export const Label = styled.Text`
    color: #9C98A6;
    font-family: Poppins_400Regular;
    font-size: 12px;
    margin: 8px 0;
`;

export const PickerItem = styled(Picker) `
    background: #fff;
    width: 100%;
    color: #C1BCCC;
`;

export const Select = styled(Picker.Item) `
    border-color: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;


export const SearchContent = styled.View`
    padding: 0 32px 64px  32px;
`;
export const SeLectGridContent = styled.View`
    width: 48%;

`;
export const SearchContentGrid = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
