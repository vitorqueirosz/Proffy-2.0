import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: #fff;
    border-width: 1px;
    border-color: #e6e6f0;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
`;



export const Content = styled.View`
    padding-top: 32px;

`
export const Header = styled.View`
    flex-direction: row;
    margin-bottom: 16px;
    padding: 0 24px;
`
export const ProfileImage = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: #eee;
`
export const ProfileInfo = styled.View`
    margin-left: 16px;
`
export const ProfileName = styled.Text`
    color: #32264D;
    font-size: 22px;
    font-family: Archivo_700Bold;
`
export const ProfileSubject = styled.Text`
    color: #6A6180;
    font-family: Poppins_400Regular;
`
export const ProfileBio = styled.Text`
    color: #6A6180;
    font-family: Poppins_400Regular;
    line-height: 28px;
    padding: 0 24px;
`;
export const ScheduleContent = styled.View`
    margin-top: 24px;
    border-top-width: 1px;
    border-color: #E6E6F0;
    padding: 24px;
`;
export const Footer = styled.View`
    background: #FAFAFC;
    padding: 24px 32px;
`;

export const TopTitles = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
`;
export const PriceText = styled.Text`
    color: #6A6180;
    font-family: Poppins_400Regular;
    font-size: 16px;
`;
export const PriceValueText = styled.Text`
    font-family: Archivo_700Bold;
    color: #8257E5;
    font-size: 18px;
`;
export const ButtonsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
`;
export const ButtonFavorited = styled(RectButton)`
    background: #8257E5;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const UnfavoritedButton = styled(RectButton)`
    background: #E33D3D;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;
export const ButtonFavoriteImage = styled.Image``;

export const ButtonContact = styled(RectButton)`
    margin-left: 8px;
    flex: 1;
    background: #04D361;
    height: 56px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 8px;
`;
export const ButtonContactImage = styled.Image``;

export const ButtonContactText= styled.Text`
    color: #fff;
    margin-left: 16px;
    font-family: Archivo_700Bold;
`;


export const TopLabels = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 8px;
`;
export const LabelDay = styled.Text`
    color: #9C98A6;
    font-family: Poppins_400Regular;
    font-size:  12px;
`;
export const LabelTime = styled.Text`
    color: #9C98A6;
    font-family: Poppins_400Regular;
    font-size: 12px;
`;
export const ScheduleDay = styled.View`
    background: #FAFAFC;
    border-radius: 8px;
    flex-direction: row;
    border-width: 1.5px;
    border-color: #E6E6F0;
    align-items: center;
    padding: 13px 16px;
    margin-top: 4px;
    justify-content: space-between;
`;
export const ScheduleDayText = styled.Text`
    font-family: Archivo_700Bold;
    color: #6A6180;
`;
export const ScheduleArrowImage = styled.Image``;
export const ScheduleTime = styled.View`
    flex-direction: row;
`;
export const ScheduleTimeText = styled.Text`
    font-family: Archivo_700Bold;
    color: #6A6180;
`;
