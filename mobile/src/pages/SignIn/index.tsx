import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import Input from "../../components/Input";
import backgroundimg from "../../assets/images/background.png";

import {
    Container,
    BackgroundImage,
    Header,
    HeaderTitle,
    ButtonCreateAccount,
    ButtonCreateAccountText,
    Content,
    BottomContent,
    RememberTitle,
    RememberLoginInput,
    ForgotPasswordInput,
    ForgotPasswordText,
    SubmitButton,
    SubmitButtonText,
} from "./styles";

const SignIn: React.FC = () => {
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const navigation = useNavigation();

    return (
      <>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          enabled
        >
          <Container>
            <BackgroundImage source={backgroundimg} />

            <Content>
              <Header>
                <HeaderTitle>Fazer login</HeaderTitle>
                <ButtonCreateAccount
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <ButtonCreateAccountText>Criar uma conta</ButtonCreateAccountText>
                </ButtonCreateAccount>
              </Header>

              <Input
                value={name}
                onChangeText={value => setName(value)}
                placeholder="E-mail"
                autoCorrect={false}
              />
              <Input
                value={password}
                onChangeText={value => setPassword(value)}
                placeholder="Senha"
                bottomInput
                iconPassword
              />

              <BottomContent>
                <RememberLoginInput>
                  {/* {' '} */}
                  <RememberTitle>Lembrar-me</RememberTitle>
                </RememberLoginInput>

                <ForgotPasswordInput>
                  {/* {' '} */}
                  <ForgotPasswordText>
                    Esqueci a senha
                  </ForgotPasswordText>
                </ForgotPasswordInput>
              </BottomContent>

              <SubmitButton>
                <SubmitButtonText>Entrar</SubmitButtonText>
              </SubmitButton>
            </Content>
          </Container>
        </KeyboardAvoidingView>
      </>
    );
};

export default SignIn;
