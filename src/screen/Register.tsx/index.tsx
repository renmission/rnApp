import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import GoogleIcon from '../../../assets/icons/Google.svg';
// import UnCheckCirlce from '../../../assets/icons/UnCheckCirlce.svg';
// import CheckCirlce from '../../../assets/icons/CheckCirlce.svg';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation  } from '@react-navigation/native';

const Register = () => {
  const navigation: any = useNavigation();

  const onPress = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.wrapper}>
      <View style={[styles.seprator, {flex: 1}]}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.body}>Please Enter your account here</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Input prefixIcon={MessageIcon} keyboardType="email-address" placeholder='Email or phone number' />
          <Input prefixIcon={LockIcon} placeholder='Password' secureTextEntry  />
        </View>
        <Text style={styles.passwordValidationHeader}>Your Password must contain:</Text>
        <Text style={styles.passwordValidationText}> Atleast 6 characters</Text>
        <Text style={styles.passwordValidationText}> Container a number</Text>
      </View>
      <View style={styles.seprator}>
        <View style={styles.btnsWrapper}>
          <Button text={'Sign Up'} />
          <Text style={[styles.body, {color: '#2E3E5C'}]}>
            Already have any account?{' '}
            <Text style={{color: '#1FCC79', fontWeight: '700'}} onPress={onPress}>Sign In</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
