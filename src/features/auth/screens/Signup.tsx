import { Alert, ScrollView, Text } from 'react-native';
import InputField from '../../../components/InputField';
import AppButton from '../../../components/Button';
import AuthLayout from '../../../components/layouts/AuthLayout';

export default function Signup({ navigation }) {
  return (
    <AuthLayout title="Sign Up">
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-5 px-5 pb-32"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <InputField
          name="Username"
          placeholder="Enter your username"
          icon="person"
        />

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

        <InputField
          name="Confirm Password"
          placeholder="Enter your password again"
          icon="lock"
          secureTextEntry
        />

        <AppButton
          title="Create an account"
          variant="primary"
          onPress={() => Alert.alert('Signup', 'We are working on that...')}
        />

        <Text className="text-center">
          Already have an account{' '}
          <Text
            className="font-bold text-[#0088FF]"
            onPress={() => navigation.navigate('Login')}
          >
            Login
          </Text>
        </Text>
      </ScrollView>
    </AuthLayout>
  );
}
