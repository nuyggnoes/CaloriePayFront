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
import Header from '../header/Header';

export default function MainWrapper(props) {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginBottom: 80,
  },
});
