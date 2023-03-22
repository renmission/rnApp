import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SigninScreen/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import CheckEmailScreen from '../screens/CheckEmailScreen/CheckEmailScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PasswordRecoveryScreen from '../screens/PasswordRecoveryScreen/PasswordRecoveryScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Signin" component={SignInScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="CheckEmail" component={CheckEmailScreen} />
      <AuthStack.Screen
        name="PasswordRecovery"
        component={PasswordRecoveryScreen}
      />
      <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <AuthStack.Screen name="Home" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
