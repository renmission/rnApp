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
import CheckCircle from '../../../assets/icons/CheckCircle.svg';
import UnCheckCircle from '../../../assets/icons/CheckCircle.svg';
import {useForm} from 'react-hook-form';

const RegisterScreen = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const pwd = watch('password');


  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  const onSignUpPressed = (data: any) => {
    console.log(data);
    
    navigation.navigate('CheckEmail')
  };


  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.body}>Please enter your account here</Text>
        </View>

        <CustomInput
          name="username"
          placeholder={'Email or phone number'}
          control={control}
          rules={{
            required: 'Email or phone number *',
            minLength: {value: 3, message: 'Atleast 3 characters long'},
          }}
          prefixIcon={MessageIcon}
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

        <View style={styles.validationWrapper}>
          <Text style={styles.msgTitle}>Your Password must contain:</Text>
          <View style={styles.msgTextWrapper}>
          {/* {values.password.length > 6 ? (
              <CheckCircle height={24} width={24}  />
            ) : <UnCheckCircle height={24} width={24}  />} */}
          <Text style={styles.msgText}>Atleast 6 characters</Text>
          <Text style={styles.msgText}>Contains a number</Text>
        </View>
        </View>
        

        <CustomButton
          text={'Sign Up'}
          onPress={handleSubmit(onSignUpPressed)}
          type={'PRIMARY'}
        />

        <Text style={styles.body}>
          Don't have any account?{' '}
          <Text
            style={{color: '#1FCC79', fontWeight: '700'}}
            onPress={onSignInPressed}>
            Sign In
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
  validationWrapper: {
    gap: 16,
    alignSelf: 'flex-start',
  },
  msgTitle: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 27,
    color: '#3E5481',
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
  },
  msgTextWrapper: {
    gap: 8,
  },
  msgText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    color: '#9FA5C0',
  },
  
});

export default RegisterScreen;
