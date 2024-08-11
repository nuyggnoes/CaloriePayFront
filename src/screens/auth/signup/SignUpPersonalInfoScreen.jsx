import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../components/commons/input/validation';
import CustomButton from '../../../components/commons/buttons/CustomButton';
import InputField from '../../../components/commons/input/InputField';
import { checkUser } from '../../../api/userApi';
import { handleFormErrors } from '../../../utils/error/formErrorHandlers';
import SignUpWrapper from '../../../components/commons/layout/wrapper/SignupWrapper';

export default function SignUpPersonInfoScreen() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const onSubmit = async (data) => {
    const { email, name, phoneNumber } = data;
    const filteredData = { email, name, phoneNumber };
    console.log(data);
    console.log(filteredData);
    // checkUser api 호출
    try {
      const response = await checkUser(filteredData);
      console.log('register successful: ', response);
      navigation.navigate('');
    } catch (error) {
      // src/utils/handleApiErrors.js 로 에러 핸들링
      // useForm의 setError 메서드를 props로 보내서 백엔드 에러메시지 핸들링
      handleFormErrors(error, setError);
    }
  };
  console.log('===========');
  console.log(errors);

  // return (
  //   <GestureHandlerRootView>
  //     <SafeAreaView>
  //       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //         <View style={{ paddingHorizontal: 16 }}>
  //           <SignUpHeader title="회원가입" />
  //           <KeyboardAwareScrollView
  //             contentContainerStyle={{
  //               flexGrow: 1,
  //             }}
  //             enableAutomaticScroll={true}
  //             showsVerticalScrollIndicator={false}
  //             extraHeight={100}
  //           >
  //             <InputField
  //               control={control}
  //               name="name"
  //               title="이름"
  //               placeholder="이름을 입력해주세요"
  //               errors={errors}
  //             />
  //             <InputField
  //               control={control}
  //               name="phoneNumber"
  //               title="전화번호"
  //               placeholder="전화번호를 입력해주세요"
  //               errors={errors}
  //             />
  //             <InputField
  //               control={control}
  //               name="email"
  //               title="e-mail"
  //               placeholder="이메일을 입력해주세요"
  //               errors={errors}
  //             />
  //             <InputField
  //               control={control}
  //               name="password"
  //               title="비밀번호"
  //               placeholder="비밀번호을 입력해주세요"
  //               secureTextEntry={true}
  //               errors={errors}
  //             />
  //             <InputField
  //               control={control}
  //               name="confirmPassword"
  //               title="비밀번호 확인"
  //               placeholder="비밀번호를 다시 입력해주세요"
  //               secureTextEntry={true}
  //               errors={errors}
  //             />
  //             <CustomButton title="다음" onPress={handleSubmit(onSubmit)} />
  //           </KeyboardAwareScrollView>
  //         </View>
  //       </TouchableWithoutFeedback>
  //     </SafeAreaView>
  //   </GestureHandlerRootView>
  // );
  return (
    <SignUpWrapper>
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
        secureTextEntry={true}
        errors={errors}
      />
      <InputField
        control={control}
        name="confirmPassword"
        title="비밀번호 확인"
        placeholder="비밀번호를 다시 입력해주세요"
        secureTextEntry={true}
        errors={errors}
      />
      <CustomButton title="다음" onPress={handleSubmit(onSubmit)} />
    </SignUpWrapper>
  );
}
