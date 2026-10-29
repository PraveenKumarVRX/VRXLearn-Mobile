import { createNativeStackNavigator } from '@react-navigation/native-stack';

// AuthLayout (logo, social media icons)
import AuthLayout from '../components/layouts/AuthLayout';

// Auth screens
import LoginScreen from '../features/auth/screens/LoginScreen';
import RegisterScreen from '../features/auth/screens/RegisterScreen';

// Stack Navigator
const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthLayout>
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Create Account' }}
        />
      </AuthStack.Navigator>
    </AuthLayout>
  );
}
