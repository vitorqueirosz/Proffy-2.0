import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background: #f0f0f7;
    flex: 1;
    justify-content: center;
    padding-bottom: 16px;
`;
export const BackgroundImage = styled.Image`
    width: 100%;
    height: 50%;

`;

export const Content = styled.View`
    justify-content: center;
    padding: 16px 32px;
    margin-top: 16px;
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

`;
export const HeaderTitle = styled.Text`
    font-size: 24px;
    font-family: Archivo_700Bold;
`;
export const ButtonCreateAccount = styled.TouchableOpacity`

`;
export const BottomContent = styled.View`

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0 24px 0;
`;

export const ContainerPassword = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding-right: 12px;
    border-color: #eee;
    height: 64px;
    position: relative;
    width: 100%;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;




export const ButtonCreateAccountText = styled.Text`
    color: #8257E5;


`;
export const RememberTitle = styled.Text`
    color: #9C98A6;
`;
export const SubmitButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
`;
export const RememberLoginInput = styled.View``;
export const SubmitButton = styled(RectButton)`
    background: #04D361;
    height: 64px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const ForgotPasswordInput = styled.View``;
export const ForgotPasswordText = styled.Text`
    color: #9C98A6;
`;
