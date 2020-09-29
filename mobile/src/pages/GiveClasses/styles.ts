import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import DropDownPicker from 'react-native-dropdown-picker';

interface ImageProps {
    hideAvatar: boolean;
}

export const Container = styled.View`
    padding-bottom: 16px;
    position: relative;
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
    position: relative;
    margin: -32px 20px 16px 20px;
    padding: 24px  0 0px 0;
`;

export const ProfilePic = styled.Image`
    width: 100%;
    max-width: 150px;
    height: 150px;
    border-radius: 75px;
    position: relative;
`;

export const ProfilePicData = styled.Image`
    width: 100%;
    max-width: 64px;
    height: 64px;
    border-radius: 75px;
    position: relative;
    margin-right: 16px;
`;


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
    position: relative;
    font-size: 20px;
`;

export const ContentTopTitle = styled.View`
    border-bottom-width: 1px;
    border-color: #E6E6F0;
    /* margin: 24px 16px 8px 16px; */
    padding-bottom: 8px;
    position: relative;
    margin-bottom: 16px;

`;
export const ClassesContent = styled.View`
    /* padding: 0 16px 8px 16px; */
    margin: 24px 16px 8px 16px;
    position: relative;

`;
export const HeaderScheduleContent = styled.View`
    flex-direction: row;
    align-items: center;
    position: relative;
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
    position: relative;
`;
export const ScheduleContentInput = styled.View`
    justify-content: center;
    position: relative;
    align-items: center;
`;

export const GridInput = styled.View`
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: space-between;
    /* padding: 0 12px; */

`;
export const InputContent = styled.View`
    width: 50%;
    margin-bottom: 24px;
    /* margin-left: 8px; */
    position: relative;
`;
export const ScheduleItem = styled.View`
    padding: 0 16px;
    position: relative;
`;
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
    position: relative;
    border-top-width: 2px;
    border-color: #E6E6F0;
    margin-top: 32px;
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


export const SelectButtonImage = styled.TouchableOpacity`
    justify-content: center;
    align-items: flex-start;
    width: 50px;
    margin-bottom: 10px;
`;
export const ImageButtonSelect = styled.Image`
    position: absolute;
    justify-content: flex-end;
    margin-left: 40px;
`;


export const PickerItem = styled(DropDownPicker) `
    background: #fff;
    width: 100%;
    color: #6A6180;
    background: #FAFAFC;
    margin-bottom: 8px;
`;

// export const Select = styled(Picker.Item) `
//     border-color: 8px;
//     border-top-left-radius: 8px;
//     border-top-right-radius: 8px;
// `;

export const HeaderProfileContent = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    position: relative;
`;
export const TopTitleName = styled.Text`
    flex-direction: row;
    align-items: center;
    font-family: Archivo_700Bold;
    color: #32264D;
    font-size: 20px;

`;
