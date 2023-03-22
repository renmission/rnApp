import React from 'react';
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

const PasswordRecoveryScreen = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const {height} = useWindowDimensions();

  const onPasswordRecover = (data: any) => {
    console.log(data);
    
    navigation.navigate('ResetPassword');
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Password recovery</Text>
          <Text style={styles.body}>
            Enter your email to recover your password
          </Text>
        </View>

        <CustomInput
          name="email"
          placeholder={'Email or phone number'}
          control={control}
          rules={{
            required: 'Email or phone number is required*',
            pattern: {
              value: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\d{10})$/,
              message: "Please enter a valid email or phone number",
            }
          }}
          prefixIcon={MessageIcon}
        />

        <CustomButton
          text={'Submit'}
          onPress={handleSubmit(onPasswordRecover)}
          type={'PRIMARY'}
        />
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

export default PasswordRecoveryScreen;
