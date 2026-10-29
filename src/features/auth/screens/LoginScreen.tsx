import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cls } from '../../../theme/classes';
import InputField from '../../../components/InputField';
import Logo from '../../../assets/images/Logo.svg';

export default function LoginScreen() {
  return (
    <SafeAreaView className={`flex-1 ${cls.bgBackground}`}>
      <View className="mt-6 gap-4 px-5">
        <InputField
          name="Email"
          placeholder="Enter your email id"
          icon="mail"
          keyboardType="email-address"
        />

        <InputField
          name="Password"
          placeholder="Enter your password"
          icon="lock"
          secureTextEntry
        />
        <Logo width={90} height={50} />
      </View>
    </SafeAreaView>
  );
}
