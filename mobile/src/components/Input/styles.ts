import styled, { css } from 'styled-components/native';

interface ContainerInputProps {
    bottomInput: boolean;
    isFocused: boolean;
    inputForm: boolean;
    textArea: boolean;
    shortInput: boolean;
    selectInput: boolean;
}

export const Container = styled.View<ContainerInputProps>`

    background: #fff;
    position: relative;
    height: 64px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-width: 2px;
    border-color: #eee;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
    width: 100%;

    ${props => props.bottomInput && css `
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-color: #fff;

        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

    ` }

    ${props => props.isFocused && css `
            border-color: #8257E5;
            border-width: 1.5px;
    ` }

    ${props => props.inputForm && css `
            border-radius: 8px;
            background: #FAFAFC;
            border-width: 1px;
            border-color: #E6E6F0;
    ` }

    ${props => props.textArea && css `
            border-radius: 8px;
            background: #FAFAFC;
            border-width: 1px;
            border-color: #E6E6F0;
            justify-content: flex-start;
            align-items: flex-start;
            height: 150px;
    ` }

    ${props => props.shortInput && css `
        margin-left: 4px;
        width: 98%;
    ` }

    ${props => props.selectInput && css `
        /* border-top-left-radius: 0px;
        border-top-right-radius: 0px; */
        border-radius: 8px;
        background: #FAFAFC;
        border-width: 1px;
        border-color: #E6E6F0;
    ` }

`;

export const TextInput = styled.TextInput`
    padding: 16px;
    color: #6A6180;
    width: 90%;

`;

export const ButtonSeePassword = styled.TouchableOpacity`
`;
export const SeePasswordIcon = styled.Image`
`;
