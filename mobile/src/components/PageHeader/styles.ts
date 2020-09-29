import styled, { css } from 'styled-components/native';

interface PageHeaderProps {
    subTitle: boolean;
}

export const Container = styled.View`
    background: #8257E5;
    padding: 16px 0 48px 0;

`;
export const Header = styled.View`
    background: #774DD6;
    padding: 24px 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PageTitle = styled.Text`
    color: #D4C2FF;
`;
export const Title = styled.Text<PageHeaderProps>`
    color: #fff;
    font-size: 26px;
    font-family: Archivo_700Bold;
    max-width: 240px;

    ${props => props.subTitle && css `
        max-width: 300px;
    `}
`;
export const SearchTeachers = styled.View`
    margin-top: 32px;
`;
export const Logo = styled.Image`

`;
export const Content = styled.View`
    height: 180px;
    padding: 32px;
`;


export const ButtonSearchTeachers = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1.5px;
    border-bottom-color: #9871F5;
    padding-bottom: 8px;
`
export const SeachTeachersTitle = styled.Text`
    color: #D4C2FF;
    font-family: Archivo_400Regular;
    align-self: flex-start;
    margin-left: 26px;
    font-size: 16px;
`

export const SearchContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SubTitle = styled.Text`
    color: #D4C2FF;
    margin-top: 8px;
    max-width: 230px;
`;
