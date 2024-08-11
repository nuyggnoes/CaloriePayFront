import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SignUpHeader from '../../../components/commons/layout/header/SignUpHeader';
import MainWrapper from '../../../components/commons/layout/wrapper/MainWrapper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';
import CustomInput from '../../../components/commons/input/Input';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../components/commons/input/validation';
import InputField from '../../../components/commons/input/InputField';

export default function SignUpPersonInfoScreen() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ paddingHorizontal: 16 }}>
            <SignUpHeader title="회원가입" />
            <KeyboardAwareScrollView
              contentContainerStyle={{
                flexGrow: 1,
              }}
              enableAutomaticScroll={true}
              showsVerticalScrollIndicator={false}
              extraHeight={100}
            >
              {/* <Controller
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
                    errorMessage={
                      errors.phoneNumber && errors.phoneNumber.message
                    }
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="phoneNumber"
              />
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    title="e-mail"
                    placeholder="이메일을 입력해주세요"
                    errorMessage={errors.email && errors.email.message}
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="email"
              /> */}
              <InputField
                control={control}
                name="name"
                title="이름"
                placeholder="이름을 입력해주세요"
                errors={errors}
              />
              <InputField
                control={control}
                name="phoneNumber"
                title="전화번호"
                placeholder="전화번호를 입력해주세요"
                errors={errors}
              />
              <InputField
                control={control}
                name="email"
                title="e-mail"
                placeholder="이메일을 입력해주세요"
                errors={errors}
              />
              <InputField
                control={control}
                name="password"
                title="비밀번호"
                placeholder="비밀번호을 입력해주세요"
                errors={errors}
              />

              <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </KeyboardAwareScrollView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
