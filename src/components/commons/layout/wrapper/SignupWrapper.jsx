import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SignUpHeader from '../header/SignUpHeader';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function SignUpWrapper(props) {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ paddingHorizontal: 16, height: '100%' }}>
            <SignUpHeader title={props.title} />
            <KeyboardAwareScrollView
              contentContainerStyle={{
                flexGrow: 1,
              }}
              enableAutomaticScroll={true}
              showsVerticalScrollIndicator={false}
              extraHeight={100}
            >
              <View style={styles.container}>{props.children}</View>
            </KeyboardAwareScrollView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
