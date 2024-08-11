import { setError } from 'react-hook-form';

export function handleFormErrors(error, setError) {
  if (error.response) {
    const { status, data } = error.response;

    if (status === 400) {
      // 특정 필드와 연결된 오류 메시지 설정
      switch (data.code) {
        case 701:
          setError('email', {
            type: 'manual',
            message: data.message || '이미 존재하는 이메일입니다.',
          });
          break;
        case 702:
          setError('name', {
            type: 'manual',
            message: data.message || '이미 존재하는 닉네임입니다.',
          });
          break;
        case 703:
          setError('phoneNumber', {
            type: 'manual',
            message: data.message || '이미 존재하는 전화번호입니다.',
          });
          break;
        default:
          console.log(`common error: ${error}`); // 알 수 없는 오류는 일반적인 오류 처리
      }
    } else {
      console.log(`other error: ${error}`); // 다른 오류는 일반적인 오류 처리 함수로 처리
    }
  } else {
    console.log(`network error: ${error}`); // 네트워크 오류 등 처리
  }

  console.error('API Error:', error.message);
}
