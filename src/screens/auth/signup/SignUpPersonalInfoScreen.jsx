import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SignUpHeader from '../../../components/commons/layout/header/SignUpHeader';
import MainWrapper from '../../../components/commons/layout/wrapper/MainWrapper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
export default function SignUpPersonInfoScreen() {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ paddingHorizontal: 16 }}>
            <SignUpHeader title="회원가입" />
            <Text>SignUp</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
