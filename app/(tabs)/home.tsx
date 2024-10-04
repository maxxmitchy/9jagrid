import React from 'react';
import { Image, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HomeScreenNavigationProp } from '../../types';

export default function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  const insets = useSafeAreaInsets();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4CAF50', dark: '#1B5E20' }}
      headerImage={
        <Image
          source={require('@/assets/images/adaptive-icon.png')}
          style={styles.headerImage}
        />
      }
    >
      <View style={{ paddingTop: insets.top }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ThemedView style={styles.container}>
            <HelloWave />
            <ThemedText style={styles.title}>Welcome to Nigerian Grid</ThemedText>
            <ThemedText style={styles.subtitle}>Connecting Nigerian Influencers and Businesses</ThemedText>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('InfluencerGrid')}
            >
              <ThemedText style={styles.buttonText}>Explore Influencers</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('BusinessDashboard')}
            >
              <ThemedText style={styles.buttonText}>Business Dashboard</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Profile')}
            >
              <ThemedText style={styles.buttonText}>View Profile</ThemedText>
            </TouchableOpacity>

            <ThemedView style={styles.featuresContainer}>
              <ThemedText style={styles.featuresTitle}>Key Features:</ThemedText>
              <ThemedText style={styles.featureItem}>• Connect with top Nigerian influencers</ThemedText>
              <ThemedText style={styles.featureItem}>• Manage your business campaigns</ThemedText>
              <ThemedText style={styles.featureItem}>• Track performance metrics</ThemedText>
              <ThemedText style={styles.featureItem}>• Discover trending content</ThemedText>
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    opacity: 0.8,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuresContainer: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    width: '100%',
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});