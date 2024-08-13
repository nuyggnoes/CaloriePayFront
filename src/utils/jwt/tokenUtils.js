import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const URL = 'base_url';

export const getTokens = (email, password, navigation) => {
  axios
    .post(`${URL}/api/login`, {
      email,
      password,
    })
    .then((res) => {
      {
        if (res.status === 200) {
          AsyncStorage.setItem(
            'Tokens',
            JSON.stringify({
              accessToken: res.data.accessToken,
              refreshToken: res.data.refreshToken,
              email,
            }),
          );
          navigation.navigate('HomeTab');
        }
      }
    });
};

const getTokenFromLocal = async () => {
  try {
    const value = await AsyncStorage.getItem('Tokens');
    if (value !== null) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const verifyTokens = async (navigation) => {
  const Token = await getTokenFromLocal();

  // 최초 접속
  if (Token === null) {
    navigation.reset({ routes: [{ name: 'AuthPage' }] });
  }
};
