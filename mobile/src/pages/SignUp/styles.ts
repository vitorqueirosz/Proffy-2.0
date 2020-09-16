import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
    flex: 1;
    background: #f0f0f7;
    padding: 32px;
    justify-content: center;
`;

export const Header = styled.View`
    flex-direction: row;
    margin: 48px 0 80px 32px;
`;
export const InfoContent = styled.View`
    margin-bottom: 104px;
`;
export const Title = styled.Text`
    font-size: 32px;
    color: #32264d;
    max-width: 240px;
    font-family: Poppins_600SemiBold;
`;
export const SubTitle = styled.Text`
    color: #6a6180;
    font-size: 14px;
    max-width: 190px;
`;
export const NextButton = styled(RectButton)`
    background: #8257e5;
    height: 64px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`;
export const NextButtonText = styled.Text`
    color: #fff;
`;

export const CreateContent = styled.View`
    /* margin-top: 64px; */
    flex: 1;
`;
export const TopTitle = styled.Text`
    font-size: 24px;
    color: #32264d;
    margin-bottom: 16px;
    font-family: Poppins_600SemiBold;
`;
