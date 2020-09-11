import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    padding-bottom: 16px;
`;


export const Header = styled.View``;
export const HeaderTitle = styled.Text``;
export const Logo = styled.Image``;
export const TopContent = styled.View`
    padding: 32px;
    align-items: center;
    margin-bottom: 16px;

`;

export const Content = styled.View`
    background: #fff;
    border-radius: 8px;
    margin: -32px 20px 16px 20px;
    padding: 24px  0 0px 0;
`;

export const ProfilePic = styled.Image``;
export const NameTitle = styled.Text`
    color: #fff;
    font-size: 24px;
    font-family: Archivo_700Bold;
    margin-top: 16px;
`;
export const Label = styled.Text`
    color: #9C98A6;
    font-family: Poppins_400Regular;
    font-size: 12px;
    margin: 8px 0;
`;
export const ProfileContent = styled.View`
    padding: 0 16px 8px 16px;
`;
export const TopTitle = styled.Text`
    font-family: Archivo_700Bold;
    color: #32264D;
    font-size: 20px;
`;

export const ContentTopTitle = styled.View`
    border-bottom-width: 1px;
    border-color: #E6E6F0;
    /* margin: 24px 16px 8px 16px; */
    padding-bottom: 8px;
    margin-bottom: 16px;

`;
export const ClassesContent = styled.View`
    /* padding: 0 16px 8px 16px; */
    margin: 24px 16px 8px 16px;

`;
export const HeaderScheduleContent = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 24px 16px 24px 16px;
    padding-bottom: 8px;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: #E6E6F0;

`;
export const NewScheduleButton = styled.TouchableOpacity`

`;
export const NewScheduleTitle = styled.Text`
    color: #8257E5;
    font-family: Poppins_600SemiBold;
`;
export const ScheduleContent = styled.View`

`;
export const ScheduleContentInput = styled.View`
    justify-content: center;
    align-items: center;
`;

export const GridInput = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;

`;
export const InputContent = styled.View`
    width: 48%;
    /* margin-left: 8px; */
`;
export const ScheduleItem = styled.View``;
export const DeleteScheduleButton = styled.TouchableOpacity``;
export const DeleteScheduleTitle = styled.Text`
    color: #E33D3D;
    font-family: Poppins_600SemiBold;
    margin: 16px 0;
`;
export const Footer = styled.View`
    background: #FAFAFC;
    width: 100%;
    padding: 32px;
    border-top-width: 2px;
    border-color: #E6E6F0;
`;
export const SubmitButton = styled(RectButton)`
    height: 60px;
    background: #04d361;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;
export const SubmitButtonText = styled.Text`
    color: #fff;
    font-family: Poppins_600SemiBold;
`;
