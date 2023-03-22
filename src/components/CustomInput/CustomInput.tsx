import React, {useState} from 'react';
import {Controller, FieldValues} from 'react-hook-form';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  Text,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

type IProps = {
  placeholder?: string;
  variant?: 'success' | 'warning' | 'error';
  prefixIcon?: React.FC<SvgProps>;
  prefixIcon1?: React.FC<SvgProps>;
  keyboardType?: KeyboardTypeOptions | undefined;
  rules?: Partial<Record<keyof FieldValues, any>>;
  control: any | undefined;
  name: string;
};

const CustomInput: React.FC<IProps> = ({
  placeholder,
  prefixIcon: PrefixIcon,
  prefixIcon1: PrefixIcon1,
  variant,
  keyboardType,
  rules,
  control,
  name,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.constainer,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            {PrefixIcon && (
              <PrefixIcon
                height={30}
                width={30}
                stroke="#3E5481"
                style={styles.svg}
              />
            )}
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={isPasswordVisible}
              keyboardType={keyboardType}
              style={styles.textInput}
            />
            {PrefixIcon1 && (
              <PrefixIcon1
                height={30}
                width={30}
                stroke="#3E5481"
                style={styles.svg_right}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 32,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  success: {
    borderWidth: 2,
    borderColor: '#24D37F',
  },
  warning: {
    borderWidth: 2,
    borderColor: '#F5BD0A',
  },
  error: {
    borderWidth: 2,
    borderColor: '#E20012',
  },
  svg: {
    position: 'absolute',
    left: 24,
  },
  svg_right: {
    position: 'absolute',
    right: 24,
  },
  textInput: {
    marginLeft: 50,
  },
});

export default CustomInput;
