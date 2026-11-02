import { Alert, View } from 'react-native';
import InputField from '../../../components/InputField';
import AppButton from '../../../components/Button';
import AuthLayout from '../../../components/layouts/AuthLayout';

export default function ResetPassword({ navigation }) {
  return (
    <AuthLayout title="Reset Password">
      <View className="mt-6 gap-6 px-5">
        <InputField
          name="New Password"
          placeholder="Enter your password"
          icon="lock"
          secureTextEntry
        />
        <InputField
          name="Confirm Password"
          placeholder="Enter your password"
          icon="lock"
          secureTextEntry
        />

        <AppButton
          title="Reset Password"
          variant="primary"
          onPress={() =>
            Alert.alert('Reset Password', ' We are Working on that...')
          }
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
