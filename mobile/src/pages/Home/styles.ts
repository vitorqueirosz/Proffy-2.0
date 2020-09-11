import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const TopContent = styled.View`
    background: #8257E5;
    padding: 32px;
`;
export const Header = styled.View`
    margin: 16px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ProfileContent = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;
export const ProfilePic = styled.Image`
    margin-right: 16px;
`;
export const NameText = styled.Text`
    color: #D4C2FF;
    font-family: Poppins_400Regular;
`;
export const LogoutButton = styled.TouchableOpacity`
    background: #774DD6;
    padding: 8px;
    border-radius: 8px;
`;
export const BackgroundImage = styled.Image`
    /* resize: contain; */
`;


export const BottomContent = styled.View`
    margin-top: 16px;
    padding: 32px;
`;
export const Title = styled.Text`
    color: #6A6180;
    font-size: 20px;
`;
export const TitleBold = styled.Text`
    font-family: Poppins_600SemiBold;
`;
export const OptionsContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 24px 0 48px 0;
`;
export const StudyOption = styled.TouchableOpacity`
    background: #774DD6;
    justify-content: space-between;

    height: 148px;
    width: 44%;
    border-radius: 8px;
    padding: 24px 0 16px 24px;
`;
export const StudyImage = styled.Image``;
export const StudyTitle = styled.Text`
    font-family: Archivo_700Bold;
    color: #fff;
    font-size: 16px;
`;
export const GiveClassesOption = styled.TouchableOpacity`
    width: 44%;
    background: #04D361;
    justify-content: space-between;

    height: 148px;
    width: 44%;
    border-radius: 8px;
    padding: 24px 0 16px 24px;
`;
export const GiveClassesImage = styled.Image``;
export const GiveClassesTitle = styled.Text`
    font-family: Archivo_700Bold;
    color: #fff;
    font-size: 16px;
`;
export const ConectionsTitle = styled.Text`

    color: #9C98A6;
    font-family: Poppins_400Regular;
    justify-content: space-between;
`;
