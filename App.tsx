import './global.css';
import { Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-2xl font-bold text-blue-600">
          Welcome to VRX Learn
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
