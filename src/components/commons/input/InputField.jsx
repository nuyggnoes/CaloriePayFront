import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validation';
import CustomInput from './Input';

export default function InputField({
  control,
  name,
  title,
  placeholder,
  secureTextEntry = false,
  errors,
}) {
  return (
    <Controller
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <CustomInput
          title={title}
          placeholder={placeholder}
          errorMessage={errors[name]?.message}
          onChange={onChange}
          value={value}
          secureTextEntry={secureTextEntry}
        />
      )}
      name={name}
    />
  );
}
