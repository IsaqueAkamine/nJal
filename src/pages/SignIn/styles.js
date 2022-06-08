import styled from 'styled-components/native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.ImageBackground`
  flex: 1;
  padding: 0 24px 0 24px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  align-self: center;
  margin-top: ${ifIphoneX ? '84px' : '40px'};
`;

export const Description = styled.Text`
  align-self: center;
  height: 21px;
  font-size: 16px;
  color: #ffffff;
`;

export const ButtonFacebook = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  border-radius: 4px;
  background-color: #3f65b4;
  margin-top: 16px;
`;

export const ImgFacebook = styled.Image`
  margin-left: 16px;
  height: 24px;
  width: 24px;
`;

export const TextFacebook = styled.Text`
  align-self: center;
  margin-left: 37px;
  margin-right: 37px;
  height: 24px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const ButtonSignIn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center
  align-items: center
  height: 56px;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const TextButton = styled.Text`
  height: 24px;
  font-size: 16px;
  font-weight: bold;
  color: #40444c;
`;

export const TextFooterContainer = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 32px;
  margin-bottom: 74px;
`;

export const TextFooter = styled.Text`
  height: 24px;
  font-size: 16px
  font-weight: bold;
  color: #ffffff;
`;

export const TextFooterSignUp = styled.Text`
  height: 24px;
  font-size: 16px
  font-weight: bold;
  color: #ffffff;

  textDecorationLine: underline;
`;
