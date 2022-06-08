import React from 'react';
import { View } from 'react-native';

import backgroundimg from '../../assets/img/signin-img/bg-home.png';
import logoimg from '../../assets/img/signin-img/logo.png';
import icfacebook from '../../assets/img/signin-img/ic-facebook.png';

import {
  ButtonFacebook,
  ButtonsContainer,
  ButtonSignIn,
  Container,
  Description,
  ImgFacebook,
  Logo,
  TextButton,
  TextFacebook,
  TextFooter,
  TextFooterContainer,
  TextFooterSignUp,
} from './styles';

export default function SignIn(props) {
  function handleEmailScreen() {
    props.navigation.navigate('Login');
  }

  return (
    <Container source={backgroundimg} resizeMode="cover">
      <Logo source={logoimg} />
      <View>
        <Description>Acesse sua agenda com</Description>
        <ButtonFacebook>
          <ImgFacebook source={icfacebook} />
          <TextFacebook>Acessar com Facebook</TextFacebook>
        </ButtonFacebook>
        <ButtonsContainer>
          <ButtonSignIn onPress={handleEmailScreen}>
            <TextButton>Email</TextButton>
          </ButtonSignIn>
          <View style={{ width: 15 }} />
          <ButtonSignIn>
            <TextButton>Celular</TextButton>
          </ButtonSignIn>
        </ButtonsContainer>
        <TextFooterContainer>
          <TextFooter>Novo consultório? </TextFooter>
          <TextFooterSignUp>Cadastre-se agora</TextFooterSignUp>
        </TextFooterContainer>
      </View>
    </Container>
  );
}

SignIn.navigationOptions = {
  header: null,
  title: 'Logar',
};
