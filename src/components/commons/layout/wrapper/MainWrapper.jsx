import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Keyboard,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { globalStyles } from '../../../../styles/globalStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MainWrapper(props) {
  return (
    <GestureHandlerRootView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
          enableAutomaticScroll={true}
          extraHeight={100}
        >
          <View style={styles.container}>{props.children}</View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.mainBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
