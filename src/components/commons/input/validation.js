import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('이름을 입력해주세요.'),
  email: yup
    .string()
    .email('이메일 형식에 적합하지 않습니다.')
    .required('이메일은 필수 입력입니다.'),
  password: yup
    .string()
    .min(4, '비밀번호는 최소 4자리 이상으로 입력해주세요.')
    .max(15, '비밀번호는 최대 15자리로 입력해주세요.')
    .required('비밀번호는 필수 입력입니다.'),
  phone_number: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, '휴대폰 입력 형식에 맞지 않습니다.')
    .required('휴대폰은 필수 입력입니다.'),
});
