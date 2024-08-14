import CustomButton from '../../components/commons/buttons/CustomButton';
import MainWrapper from '../../components/commons/layout/wrapper/MainWrapper';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../../components/commons/text/Title';
import { globalStyles } from '../../styles/globalStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../navigations/AppNavigation';
import { getAccessToken } from '../../utils/jwt/tokenUtils';

export default function InitialScreen() {
  const navigation = useNavigation();
  const { setIsLoggedIn } = useAuth();
  return (
    <View
      style={{
        display: 'flex',
        height: hp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.titleContainer}>
        <Title />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="카카오 로그인"
          titleStyle={styles.kakaoText}
          icon={{
            name: 'comment',
            type: 'font-awesome',
            size: 21,
            color: globalStyles.kakaoIconColor,
          }}
          buttonStyle={{
            backgroundColor: globalStyles.kakaoContainerColor,
          }}
        />
        <CustomButton
          title="이메일 로그인"
          icon={{
            name: 'envelope',
            type: 'font-awesome',
            size: 21,
            color: 'white',
          }}
          onPress={() => {
            // setIsLoggedIn(true);
            navigation.navigate('login');
          }}
        />
        <Text style={styles.subLoginText}>아직 회원이 아니신가요?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signUpPersonInfo');
          }}
        >
          <Text style={styles.loginText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1.3,
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
  kakaoText: {
    color: 'black',
  },
});
