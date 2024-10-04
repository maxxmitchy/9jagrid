import React from 'react';
import { ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { theme } from '../../theme';
import { Influencer, RootStackParamList } from '../../types';

type InfluencerDetailScreenRouteProp = RouteProp<RootStackParamList, 'InfluencerDetail'>;
type InfluencerDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'InfluencerDetail'>;

type Props = {
  route: InfluencerDetailScreenRouteProp;
  navigation: InfluencerDetailScreenNavigationProp;
};

export default function InfluencerDetailScreen({ route, navigation }: Props) {
  const { influencer } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: influencer.image }} style={styles.image} />
      <ThemedView style={styles.content}>
        <ThemedText style={styles.name}>{influencer.name}</ThemedText>
        <ThemedText style={styles.followers}>{influencer.followers} followers</ThemedText>
        <ThemedText style={styles.bio}>{influencer.bio}</ThemedText>
        <ThemedText style={styles.sectionTitle}>Top Categories</ThemedText>
        <ThemedView style={styles.categoriesContainer}>
          {influencer.categories.map((category, index) => (
            <ThemedView key={index} style={styles.category}>
              <ThemedText style={styles.categoryText}>{category}</ThemedText>
            </ThemedView>
          ))}
        </ThemedView>
        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>Contact Influencer</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  followers: {
    fontSize: 18,
    color: theme.colors.textLight,
    marginBottom: 15,
  },
  bio: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  category: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    color: theme.colors.white,
    fontSize: 14,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});