import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { globalStyles } from '../../../../styles/globalStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MainWrapper(props) {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            enableAutomaticScroll={true}
            extraHeight={100}
          >
            <View>{props.children}</View>
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.mainBackgroundColor,
    flex: 1,
  },
});
