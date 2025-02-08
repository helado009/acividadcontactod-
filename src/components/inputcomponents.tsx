import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from '../theme/appTheme';

interface InputComponentProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};
