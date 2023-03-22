import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import GoogleIcon from '../../../assets/icons/Google.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import MessageIcon from '../../../assets/icons/Message.svg';
import Show from '../../../assets/icons/Show.svg';
import {useForm} from 'react-hook-form';

const SignInScreen = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);
  
  const {height} = useWindowDimensions();

  const onSignInPressed = (data: any) => {
    console.log(data);

    navigation.navigate('Home');
  };

  const onSignUpPressed = () => {
    navigation.navigate('Register');
  };

  const onForgotPasswordPressed = () => {
    console.log('Forgot Password?');
  };

  const onSignInGoogle = () => {
    console.log('onSignInGoogle');
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.body}>Please enter your account here</Text>
        </View>

        <CustomInput
          name="email"
          control={control}
          placeholder={'Email or phone number'}
          prefixIcon={MessageIcon}
          rules={{
            required: 'Email is required *',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email address',
            },
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder={'Password'}
          prefixIcon={LockIcon}
          prefixIcon1={Show}
          rules={{
            required: 'Password is required *',
            minLength: {value: 6, message: 'Atleast 6 characters.'},
          }}
        />

        <CustomButton
          text={'Forgot Password?'}
          onPress={() => {
            navigation.navigate('PasswordRecovery');
          }}
          type={'TERTIARY'}
        />

        <CustomButton
          text={'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
          type={'PRIMARY'}
        />

        <Text style={styles.body}>Or continue with</Text>

        <CustomButton
          text={'Sign In with Google'}
          onPress={onSignInGoogle}
          type={'SECONDARY'}
          btnIcon={GoogleIcon}
        />
        <Text style={styles.body}>
          Don't have any account?{' '}
          <Text
            style={{color: '#1FCC79', fontWeight: '700'}}
            onPress={onSignUpPressed}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    flex: 1,
    gap: 10,
    paddingVertical: 24,
  },
  container: {
    alignItems: 'center',
    padding: 20,
    gap: 24,
    paddingVertical: 24,
  },
  headerWrapper: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 32,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#2E3E5C',
  },
  body: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#9FA5C0',
  },
});

export default SignInScreen;
