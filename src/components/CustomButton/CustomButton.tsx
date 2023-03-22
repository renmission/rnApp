import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
  Image,
  View,
} from 'react-native';
import Svg, {Circle, SvgProps} from 'react-native-svg';

interface IProps {
  btnIcon?: React.FC<SvgProps>;
  onPress: (value: GestureResponderEvent) => void;
  text: string;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  bgColor?: string;
  fgColor?: string;
  iconColor?: string;
  variant?: 'primary' | 'secondary' | 'form';
}

const CustomButton: React.FC<IProps> = ({
  onPress,
  text,
  type = 'PRIMARY',
  variant = 'primary',
  bgColor,
  fgColor,
  btnIcon: Icon,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      {Icon && <Icon height={24} width={30} fill={colors[variant]} />}
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export const colors = {
  primary: '#F5BD0A',
  secondary: '#24D37F',
  form: '#F4F5F7',
};

export const textColors = {
  primary: '#FFFFFF',
  secondary: '#FFFFFF',
  form: '#2E3E5C',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    borderRadius: 32,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  container_PRIMARY: {
    backgroundColor: '#F8C700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_SECONDARY: {
    borderColor: '#F8C700',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_TERTIARY: {
    justifyContent: 'flex-end',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_PRIMARY: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4
  },
  text_SECONDARY: {
    color: '#F8C700',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
