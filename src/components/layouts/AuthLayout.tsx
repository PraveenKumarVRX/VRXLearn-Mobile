import { Alert, Image, Linking, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// icon imports
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Types
type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
};

// Social connect details
const socialLinks = [
  {
    key: 'web',
    name: 'Website',
    label: () => (
      <MaterialCommunityIcons name="web" color="#737062" size={30} />
    ),
    navlink: 'https://vrnexgen1.com/',
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    label: () => (
      <MaterialCommunityIcons name="linkedin" color="#0A66C2" size={30} />
    ),
    navlink: 'https://www.linkedin.com/company/vrnexgen/',
  },
  {
    key: 'youtube',
    name: 'YouTube',
    label: () => <AntDesign name="youtube" color="#FF0000" size={30} />,
    navlink: 'https://www.youtube.com/@VRNeXGen1/',
  },
  {
    key: 'GitHub',
    name: 'GitHub',
    label: () => (
      <MaterialCommunityIcons name="phone-classic" color="#737062" size={28} />
    ),
    navlink: 'tel:+919876543210',
  },
];

function AuthLayout({ children, title, socialLogin = true }: AuthLayoutProps) {
  async function openSocialLinks(url: string) {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Unable to open link', 'Please try again later.');
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-900">
      <View className="flex-1 items-center px-4">
        <View className="w-full max-w-md flex-1">
          {/* Header */}
          <View className="items-center pt-6">
            <Image
              source={require('../../assets/logos/logo.png')}
              resizeMode="contain"
              className="h-28 w-28"
            />

            <Text className="mb-4 mt-3 text-center text-4xl font-bold text-slate-900 dark:text-white">
              {title}
            </Text>
          </View>

          {/* Scrollable Screen Content */}
          <View className="w-full flex-1">{children}</View>

          {/* Social Footer */}
          {socialLogin && (
            <View className="items-center py-4">
              <Text className="mb-3 text-sm text-slate-500 dark:text-slate-400">
                Connect with us
              </Text>

              <View className="flex-row items-center justify-center gap-5">
                {socialLinks.map(social => (
                  <Pressable
                    key={social.key}
                    accessibilityRole="link"
                    accessibilityLabel={social.name}
                    onPress={() => openSocialLinks(social.navlink)}
                    className="h-11 w-11 items-center justify-center rounded-full border border-slate-200"
                  >
                    {social.label()}
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
export default AuthLayout;
