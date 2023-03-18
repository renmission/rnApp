import {TextInput, View, TextInputProps} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import styles from './styles';

type Props = {
  variant?: 'success' | 'warning' | 'error';
  prefixIcon?: React.FC<SvgProps>;
} & TextInputProps;

const Input = ({variant, prefixIcon: PrefixIcon, ...props}: Props) => {
  const inputStyle: any = [styles.input];
  if (variant) {
    inputStyle.push(styles[variant]);
  }

  console.log(PrefixIcon);

  return (
    <View style={styles.inputWrapper}>
      {PrefixIcon && (
        <PrefixIcon
          height={24}
          width={24}
          stroke="#3E5481"
          style={styles.svg}
        />
      )}
      <TextInput style={inputStyle} {...props} />
    </View>
  );
};

export default Input;
