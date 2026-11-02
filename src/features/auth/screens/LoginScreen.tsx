import { Alert, KeyboardAvoidingView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../../components/InputField';
import AppButton from '../../../components/Button';
import AuthLayout from '../../../components/layouts/AuthLayout';

export default function LoginScreen({ navigation }) {
  const screenNavigator = () => {
    navigation.navigate('Main', { screen: 'Dashboard' });
  };
  return (
    <AuthLayout title="Welcome Back!">
      <View className="mt-6 gap-6 px-5">
        <InputField
          name="Email"
          placeholder="Enter your email id"
          icon="mail-outline"
          keyboardType="email-address"
        />

        <InputField
          name="Password"
          placeholder="Enter your password"
          icon="lock"
          secureTextEntry
        />
        <Text
          className="underline"
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Forgot Passsword?
        </Text>

        <AppButton
          title="Login"
          variant="primary"
          onPress={() => screenNavigator()}
        />
        <Text>
          Don't have an account?{' '}
          <Text
            className="text-[#0088FF] font-bold"
            onPress={() => navigation.navigate('Signup')}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </AuthLayout>
  );
}
