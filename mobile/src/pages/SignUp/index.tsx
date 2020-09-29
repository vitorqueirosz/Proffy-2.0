import React, { useCallback, useEffect, useState } from "react";

import Icon from "react-native-vector-icons/Feather";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Input from "../../components/Input";

import {
    Container,
    Header,
    InfoContent,
    Title,
    SubTitle,
    CreateContent,
    TopTitle,
    NextButton,
    NextButtonText,
} from "./styles";



const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const [name, setName] = useState<string>();
    const [whatsapp, setWhatsapp] = useState<string>();


    const handleInputChangeText = useCallback((value: string) => {
        setWhatsapp(value);
        console.log(value)
    }, []);

    return (
      <>
        <Header>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-left"
            size={25}
            color="#9a9a9a"
          />
        </Header>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          enabled
        >
          <Container>
            <InfoContent>
              <Title>Crie sua conta gratuita</Title>
              <SubTitle>
                Basta preencher esses dados e voce estara conosco.
              </SubTitle>
            </InfoContent>

            <CreateContent>
              <TopTitle>01. Quem é você?</TopTitle>

              <Input placeholder="Nome" value={name} onChangeText={value => setName(value)} />

              <Input
                placeholder="Whatsapp"
                value={whatsapp}
                bottomInput
                secureTextEntry={false}
                mask="phone"
                maxLength={14}
                inputMaskChange={(text: string) => setWhatsapp(text)}
              />

              <NextButton
                onPress={() => navigation.navigate("PasswordSignUp", { name, whatsapp })}
              >
                <NextButtonText>Proximo</NextButtonText>
              </NextButton>
            </CreateContent>
          </Container>
        </KeyboardAvoidingView>
      </>
    );
};

export default SignUp;
