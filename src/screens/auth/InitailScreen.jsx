import CustomButton2 from '../../components/commons/buttons/CustomButton';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import { StyleSheet, Text } from 'react-native';
import Title from '../../components/commons/text/Title';

export default function InitialScreen() {
  return (
    <MainWrapper>
      <Title />
      <CustomButton2
        title="이메일로 회원가입"
        icon={{
          name: 'envelope',
          type: 'font-awesome',
          size: 21,
          color: 'white',
        }}
        iconContainerStyle={{
          marginRight: 10,
        }}
        onPress={() => {
          //   Alert.alert('CUSTOM_BUTTON');
          console.log('register');
        }}
      />
      <Text>이미 회원이신가요?</Text>
      <Text>로그인</Text>
    </MainWrapper>
  );
}
