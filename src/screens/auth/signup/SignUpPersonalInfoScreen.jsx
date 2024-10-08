import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { View } from 'react-native';
import { userPersonalSchema } from '../../../components/commons/input/validation';
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
    resolver: yupResolver(userPersonalSchema),
    mode: 'onSubmit',
  });
  const onSubmit = async (data) => {
    const { email, name, phoneNumber } = data;
    const validationData = { email, name, phoneNumber };
    const { confirmPassword, ...personalData } = data;
    console.log(data);
    console.log(validationData);
    // // checkUser api 호출
    // try {
    //   const response = await checkUser(filteredData);
    //   console.log('check successful: ', response);
    //   navigation.navigate('signUpPhysicalInfo', { personalData });
    // } catch (error) {
    //   // src/utils/handleApiErrors.js 로 에러 핸들링
    //   // useForm의 setError 메서드를 props로 보내서 백엔드 에러메시지 핸들링
    //   handleFormErrors(error, setError);
    // }
    navigation.navigate('signUpPhysicalInfo', {
      personalData,
    });
  };
  console.log('===========');
  console.log(errors);

  return (
    <SignUpWrapper
      title="회원가입"
      buttonText="다음"
      onPress={handleSubmit(onSubmit)}
    >
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
    </SignUpWrapper>
  );
}
