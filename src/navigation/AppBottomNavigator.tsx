import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens imports
import DashboardScreen from '../features/dashboard/screens/DashboardScreen';
import MyLearning from '../features/myLearning/screens/MyLearning';
import AllCourses from '../features/allCourses/screens/AllCourses';
import Profile from '../features/profile/screens/Profile';

// Icons import
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

type TabIconProps = {
  routeName: string;
  size: number;
  color: string;
};

function renderTabBarIcon({ routeName, size, color }: TabIconProps) {
  switch (routeName) {
    case 'Dashboard':
      return <Icon name="view-dashboard-outline" size={size} color={color} />;
    case 'MyLearning':
      return (
        <Icon name="book-open-page-variant-outline" size={size} color={color} />
      );
    case 'AllCourses':
      return <Icon name="bookshelf" size={size} color={color} />;
    case 'Profile':
      return <Icon name="account-circle-outline" size={size} color={color} />;
  }
}

export default function AppBottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) =>
          renderTabBarIcon({
            routeName: route.name,
            color,
            size,
          }),
        tabBarActiveTintColor: '#840227',
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="MyLearning" component={MyLearning} />
      <Tab.Screen name="AllCourses" component={AllCourses} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
