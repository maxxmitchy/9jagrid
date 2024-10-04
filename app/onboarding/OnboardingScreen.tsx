import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

const onboardingSteps = [
  {
    title: 'Welcome to Nigerian Grid',
    description: 'Connect with influencers and businesses across Nigeria',
    image: 'https://placekitten.com/400/300', // Replace with actual onboarding image
  },
  {
    title: 'Discover Opportunities',
    description: 'Find collaborations and grow your network',
    image: 'https://placekitten.com/400/301', // Replace with actual onboarding image
  },
  {
    title: 'Track Your Progress',
    description: 'Monitor your growth and engagement',
    image: 'https://placekitten.com/400/302', // Replace with actual onboarding image
  },
];

export function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigation = useNavigation();
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    image: {
      width: 300,
      height: 200,
      marginBottom: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 40,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    skipButton: {
      padding: 10,
    },
    skipButtonText: {
      color: theme.colors.primary,
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    paginationDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.border,
      marginHorizontal: 5,
    },
    paginationDotActive: {
      backgroundColor: theme.colors.primary,
    },
  });

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate('Login' as never);
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: onboardingSteps[currentStep].image }} style={styles.image} />
      <ThemedText style={styles.title}>{onboardingSteps[currentStep].title}</ThemedText>
      <ThemedText style={styles.description}>{onboardingSteps[currentStep].description}</ThemedText>
      <View style={styles.buttonContainer}>
        {currentStep < onboardingSteps.length - 1 ? (
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <ThemedText style={styles.skipButtonText}>Skip</ThemedText>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Button onPress={handleNext}>
          {currentStep < onboardingSteps.length - 1 ? 'Next' : 'Get Started'}
        </Button>
      </View>
      <View style={styles.paginationContainer}>
        {onboardingSteps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentStep && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}