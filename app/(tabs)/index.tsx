import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './home';
import InfluencerGridScreen from './influencer-grid';
import BusinessDashboardScreen from './business-dashboard';
import ProfileScreen from './profile';
import InfluencerDetailScreen from '../(tabs)/influencer-details';
import { RootStackParamList, MainTabParamList } from '../../types';
import { useTheme } from '../../components/theme-provider';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'InfluencerGrid') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'BusinessDashboard') {
            iconName = focused ? 'business' : 'business-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="InfluencerGrid" component={InfluencerGridScreen} options={{ title: 'Influencers' }} />
      <Tab.Screen name="BusinessDashboard" component={BusinessDashboardScreen} options={{ title: 'Dashboard' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTabs" 
        component={MainTabs} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="InfluencerDetail" 
        component={InfluencerDetailScreen}
        options={({ route }) => ({ 
          title: route.params.influencer.name,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.white,
        })}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});