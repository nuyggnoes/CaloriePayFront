import { Alert, StyleSheet, Text, View, TextInput } from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import CustomButton2 from '../components/commons/buttons/CustomButton';
import CustomButton1 from '../components/commons/buttons/Button';
import { useNavigation } from '@react-navigation/native';
import MainWrapper from '../components/commons/layout/wrapper/MainWrapper';

// //////////////////////////////////
import { Button } from '@rneui/themed';

import { useForm, Controller } from 'react-hook-form';
import CustomInput from '../components/commons/input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../components/commons/input/validation';
import CalendarComponent from '../components/units/Calendar';

export default function TestScreen1Page() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const onPressMove = () => {
    navigation.navigate('test3');
  };

  const onSubmit = (data) => console.log(data);

  return (
    <MainWrapper>
      <Text>TestScreen1</Text>
      <TouchableOpacity onPress={onPressMove}>
        <Text>test3</Text>
      </TouchableOpacity>
      <CustomButton1
        title="Small Button"
        onPress={() => {
          alert('Small Button Pressed');
          navigation.navigate('detail');
        }}
        style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
        textStyle={styles.smallButtonText}
      />
      <Button
        title="HOME"
        icon={{
          name: 'home',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {
          Alert.alert('hi');
        }}
      />
      <CustomButton2
        title="이메일로 회원가입"
        icon={{
          name: 'envelope',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        iconContainerStyle={{
          marginRight: 10,
        }}
        onPress={() => {
          Alert.alert('CUSTOM_BUTTON');
        }}
      />

      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              title="이름"
              placeholder="이름을 입력해주세요"
              errorMessage={errors.name && errors.name.message}
              onChange={onChange}
              value={value}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              title="전화번호"
              placeholder="전화번호를 입력해주세요"
              errorMessage={errors.phone_number && errors.phone_number.message}
              onChange={onChange}
              value={value}
            />
          )}
          name="phone_number"
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <CalendarComponent />
    </MainWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  smallButtonText: {
    fontSize: 12,
  },
});
