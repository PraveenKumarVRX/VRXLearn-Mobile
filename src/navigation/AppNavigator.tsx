import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../features/dashboard/screens/DashboardScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
    </Tab.Navigator>
  );
}
