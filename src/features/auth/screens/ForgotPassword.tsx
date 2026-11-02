import { Alert, Text, View } from 'react-native';
import InputField from '../../../components/InputField';
import AppButton from '../../../components/Button';
import AuthLayout from '../../../components/layouts/AuthLayout';

export default function ForgotPassword({ navigation }) {
  return (
    <AuthLayout title="Forgot Password?">
      <View className="mt-6 gap-6 px-5">
        <Text className="text-center">
          No worries, Enter your email address and we'll send you a link to
          reset your password.
        </Text>
        <InputField
          name="Email"
          placeholder="Enter your email id"
          icon="mail-outline"
          keyboardType="email-address"
        />

        <AppButton
          title="Reset Password"
          variant="primary"
          onPress={() => navigation.navigate('ResetPassword')}
        />
        <AppButton
          title="Back to Login"
          variant="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </AuthLayout>
  );
}
