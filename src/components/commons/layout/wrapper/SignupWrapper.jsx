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

export default function SignUpWrapper(props) {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
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
    flex: 1,
    alignItems: 'center',
    marginBottom: 80,
  },
});
