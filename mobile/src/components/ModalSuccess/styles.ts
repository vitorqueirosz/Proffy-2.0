import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';



export const Container = styled.View`
    position: relative;
    flex: 1;
    /* justify-content: center;
    align-items: center;
`;


export const ImageBackground = styled.Image`
    position: absolute;
    /* flex: 1; */
`;
export const Content = styled.View`
    position: relative;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 184px;
    /* justify-content: center;
    align-items: center; */
`;


export const Title = styled.Text`
    font-size: 32px;
    color: #fff;
    margin-top: 32px;
    font-family: Archivo_700Bold;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
    max-width: 250px;
    line-height: 20px;
    color: #D4C2FF;
    margin-top: 16px;
    font-family: Poppins_400Regular;
`;

export const ImageDone = styled.Image`

`;
export const ReturnButtonText = styled.Text`
    color: #fff;
`;

export const  ReturnButton = styled(RectButton)`
    background: #04D361;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-radius: 8px;
    width: 260px;

    margin-top: 64px;
`;
