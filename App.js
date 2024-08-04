import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import OrderScreen from './src/screens/OrderScreen';
import ProductScreen from './src/screens/ProductScreen';
import OverviewScreen from './src/screens/OverviewScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OrderIcon from './src/images/icons/OrderIcon/index';
import ProductIcon from './src/images/icons/ProductIcon/index';
import OverviewIcon from './src/images/icons/OverviewIcon/index';
import ProfileIcon from './src/images/icons/ProfileIcon/index';

const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress, accessibilityState }) {
  const isSelected = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isSelected ? '#F1EFEF' : 'white',
        borderRadius:8,
        margin:2,
        padding:2
      }}
    >
      {children}
    </TouchableOpacity>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let IconComponent;

          switch (route.name) {
            case 'Orders':
              IconComponent = OrderIcon;
              break;
            case 'Products':
              IconComponent = ProductIcon;
              break;
            case 'Overview':
              IconComponent = OverviewIcon;
              break;
            case 'Profile':
              IconComponent = ProfileIcon;
              break;
            default:
              IconComponent = OrderIcon;
          }

          return <IconComponent color={focused ? 'white' : color} size={size} />;
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text style={{ fontSize: 12, color: focused ? '#6B6062' : '#6B6062' }}>
              {route.name}
            </Text>
          );
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Products" component={ProductScreen} />
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
