import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type AuthLayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-900">
      <View className="flex-1 items-center justify-center px-4">
        <View className="w-full max-w-md items-center">
          <Image
            source={require('../../assets/logos/logo.png')}
            resizeMode="contain"
            className="mb-4 h-16 w-16"
          />

          <Text className="mb-6 text-center text-2xl font-bold text-slate-900 dark:text-white">
            Welcome Back!
          </Text>
          <View className="w-full rounded-2xl">{children}</View>
          {/* Social media section */}
          <View className="mt-10 w-full items-center">
            <Text className="mb-4 text-xs text-slate-500 dark:text-slate-400">
              Connect with us
            </Text>

            <View className="flex-row items-center justify-center gap-5">
              {/* Add your actual social icon components here */}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AuthLayout;
