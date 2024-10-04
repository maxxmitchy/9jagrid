import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type Influencer = {
  id: string;
  name: string;
  followers: string;
  image: string;
  bio: string;
  categories: string[];
};

export type MainTabParamList = {
  Home: undefined;
  InfluencerGrid: undefined;
  BusinessDashboard: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  MainTabs: undefined;
  InfluencerDetail: { influencer: Influencer };
};

export type HomeScreenNavigationProp = BottomTabNavigationProp<MainTabParamList, 'Home'>;
export type InfluencerGridScreenNavigationProp = BottomTabNavigationProp<MainTabParamList, 'InfluencerGrid'>;

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textLight: string;
    border: string;
    error: string;
    white: string;
  };
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
};