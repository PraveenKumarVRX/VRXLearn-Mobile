import { createNativeStackNavigator } from '@react-navigation/native-stack';

// AuthLayout (logo, social media icons)
import AuthLayout from '../components/layouts/AuthLayout';

// Auth screens
import LoginScreen from '../features/auth/screens/LoginScreen';
import RegisterScreen from '../features/auth/screens/RegisterScreen';
import ForgotPassword from '../features/auth/screens/ForgotPassword';
import ResetPassword from '../features/auth/screens/ResetPassword';
import Signup from '../features/auth/screens/Signup';

// Stack Navigator
const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        // options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        // options={{ title: 'Create Account' }}
      />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}
