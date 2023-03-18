import {Text, Pressable} from 'react-native';
import React from 'react';
import styles, {colors} from './styles';
import {SvgProps} from 'react-native-svg';


interface IProps {
  variant?: 'primary' | 'secondary' | 'form';
  size?: 'small' | 'default' | 'large';
  type?: 'fill' | 'outline';
  btnIcon?: React.FC<SvgProps>;
  text: string;
}

const Button: React.FC<IProps> = ({
  variant = 'primary',
  type = 'fill',
  size = 'large',
  btnIcon: Icon,
  text,
  ...props
}) => {
  const style: any = styles(variant);
  const btnStyles: any = [style.btn];
  const textStyle: any = [style.btnText];

  if (size) {
    btnStyles.push(style[size]);
  }
  if (type) {
    btnStyles.push(style[type]);
    textStyle.push(style[`text_${type}`]);
  }

  return (
    <Pressable style={btnStyles} {...props}>
      {Icon && <Icon height={24} width={32} fill={colors[variant]} />}
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
};

export default Button;
