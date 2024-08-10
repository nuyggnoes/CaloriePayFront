import CustomButton2 from '../../components/commons/buttons/CustomButton';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../../components/commons/text/Title';
import { globalStyles } from '../../styles/globalStyles';

export default function InitialScreen() {
  return (
    <MainWrapper>
      <View
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={styles.titleContainer}>
          <Title />
        </View>
        <View style={styles.buttonContainer}>
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
          <Text style={styles.subLoginText}>이미 회원이신가요?</Text>
          <TouchableOpacity>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainWrapper>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subLoginText: {
    color: globalStyles.subLoginTextColor,
    marginTop: 16,
  },
  loginText: {
    fontWeight: '800',
    fontSize: 14,
    marginTop: 4,
    color: globalStyles.loginTextColor,
  },
});
