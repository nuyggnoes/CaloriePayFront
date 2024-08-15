import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import SignUpWrapper from "../../components/commons/layout/wrapper/SignupWrapper";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import InputField from "../../components/commons/input/InputField";
import CustomButton from "../../components/commons/buttons/CustomButton";
import { globalStyles } from "../../styles/globalStyles";
import SignUpText from "../../components/commons/text/SignUpText";

export default function LoginScreen() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <SignUpWrapper title="로그인" buttonText="로그인">
      <View style={{ width: "100%", marginTop: 30 }}>
        <InputField
          control={control}
          name="email"
          title="사용자 계정(이메일)"
          placeholder="이메일을 입력해주세요"
          errors={errors}
        />
        <InputField
          control={control}
          name="password"
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          errors={errors}
        />
      </View>
      {/* <CustomButton title="로그인" onPress={handleSubmit(onSubmit)} /> */}
      <View>
        <SignUpText navigation={navigation} />
      </View>
    </SignUpWrapper>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
  },
  subLoginText: {
    color: globalStyles.subLoginTextColor,
    marginTop: 16,
  },
  loginText: {
    fontWeight: "800",
    fontSize: 14,
    marginTop: 4,
    color: globalStyles.loginTextColor,
  },
  kakaoText: {
    color: "black",
  },
});
