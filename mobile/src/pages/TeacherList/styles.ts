import styled from 'styled-components/native';

import {Picker} from '@react-native-community/picker';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
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
    height: 54px;
    color: #C1BCCC;
`;

export const ScrollView = styled.ScrollView`
    margin-top: -32px;
`;

export const Select = styled(Picker.Item) `
    border-color: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;


export const SearchContent = styled.View`
    padding: 0 32px 16px  32px;
`;
export const SeLectGridContent = styled.View`
    width: 48%;

`;
export const SearchContentGrid = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


// export const SubmitButton = styled(RectButton)``;
// export const SubmitButtonText = styled.Text``;


export const EmptyTeacherList = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 16px;
    margin: 20px;

    background: #000;
`;


export const EmptyText = styled.Text`
    color: #fff;
    font-size: 14px;
    font-family: Archivo_700Bold;
    margin-right: 8px;
`;
