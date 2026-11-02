import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBottomNavigator from './AppBottomNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={AppBottomNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
