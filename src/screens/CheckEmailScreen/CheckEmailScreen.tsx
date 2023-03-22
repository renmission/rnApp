import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TextInput,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import GoogleIcon from '../../../assets/icons/Google.svg';
import LockIcon from '../../../assets/icons/Lock.svg';
import MessageIcon from '../../../assets/icons/Message.svg';
import Show from '../../../assets/icons/Show.svg';

const CheckEmailScreen = ({navigation}: any) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {height} = useWindowDimensions();

  const onCheckEmailPressed = () => {
    navigation.navigate('Home');
  };

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleChange = (text: any) => {
    const inputArr = text.split('');
    setInput1(inputArr[0] || '');
    setInput2(inputArr[1] || '');
    setInput3(inputArr[2] || '');
    setInput4(inputArr[3] || '');
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.body}>We've sent the code to your email</Text>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            maxLength={4}
            keyboardType="number-pad"
            value={input1}
            onChangeText={text => handleChange(text)}
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={input2}
            onChangeText={text => setInput2(text)}
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={input3}
            onChangeText={text => setInput3(text)}
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={input4}
            onChangeText={text => setInput4(text)}
          />
        </View>

        <Text style={styles.body}>
          code expires in:{' '}
          <Text style={{color: '#1FCC79', fontWeight: '700'}}>03:12</Text>{' '}
        </Text>

        <CustomButton
          text={'Submit'}
          onPress={onCheckEmailPressed}
          type={'PRIMARY'}
        />
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 24,
    width: '20%',
    textAlign: 'center',
    fontSize: 24,
    height: 65,
    marginHorizontal: 5,
  },
});

export default CheckEmailScreen;
