import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import MessageIcon from '../../../assets/icons/Message.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import GoogleIcon from '../../../assets/icons/Google.svg';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation: any = useNavigation();

  const onPress = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.wrapper}>
      <View style={[styles.seprator, {flex: 1}]}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.body}>Please Enter your account here</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Input prefixIcon={MessageIcon} keyboardType="email-address" placeholder='Email or phone number' />
          <Input prefixIcon={LockIcon} placeholder='Password' secureTextEntry />
        </View>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <View style={styles.seprator}>
        <View style={styles.btnsWrapper}>
          <Button text={'Login'}/>
          <Text style={styles.body}>or Continue with</Text>
          <Button text={'Google'} btnIcon={GoogleIcon} type="outline" />
          <Text style={[styles.body, {color: '#2E3E5C'}]}>
            Don't have any account?{' '}
            <Text style={{color: '#1FCC79', fontWeight: '700'}} onPress={onPress}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
