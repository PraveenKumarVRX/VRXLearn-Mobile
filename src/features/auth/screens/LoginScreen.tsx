import { Alert, Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cls } from '../../../theme/classes';
import InputField from '../../../components/InputField';
import AppButton from '../../../components/Button';

export default function LoginScreen() {
  return (
    <SafeAreaView className={`flex-1`}>
      <View className="mt-6 gap-4 px-5">
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
        {/*<Logo width={90} height={50} />*/}
        <Text
          className="underline"
          onPress={() => Alert.alert('Screen Will Available Soon...')}
        >
          Forgot Passsword?
        </Text>

        <AppButton title="Login" variant="primary" />
        <AppButton title="Back to Login" variant="secondary" />
      </View>
    </SafeAreaView>
  );
}
