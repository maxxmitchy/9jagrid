import React, { useState } from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { theme } from '../../theme';
import { Influencer, RootStackParamList } from '../../types';

type InfluencerGridScreenNavigationProp = StackNavigationProp<RootStackParamList>;

// Mock data for influencers
const influencers: Influencer[] = [
  { 
    id: '1', 
    name: 'Aisha', 
    followers: '500K', 
    image: 'https://example.com/aisha.jpg',
    bio: 'Fashion and lifestyle influencer based in Lagos.',
    categories: ['Fashion', 'Lifestyle', 'Beauty']
  },
  { 
    id: '2', 
    name: 'Chidi', 
    followers: '750K', 
    image: 'https://example.com/chidi.jpg',
    bio: 'Tech enthusiast and software developer from Abuja.',
    categories: ['Technology', 'Coding', 'Gadgets']
  },
  // ... (add similar details for other influencers)
];

const InfluencerCard: React.FC<{ influencer: Influencer; onPress: () => void }> = ({ influencer, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: influencer.image }} style={styles.image} />
    <ThemedView style={styles.cardContent}>
      <ThemedText style={styles.name}>{influencer.name}</ThemedText>
      <ThemedText style={styles.followers}>{influencer.followers} followers</ThemedText>
    </ThemedView>
  </TouchableOpacity>
);

export default function InfluencerGridScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInfluencers, setFilteredInfluencers] = useState<Influencer[]>(influencers);
  const navigation = useNavigation<InfluencerGridScreenNavigationProp>();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = influencers.filter(
      influencer => influencer.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredInfluencers(filtered);
  };

  const handleInfluencerPress = (influencer: Influencer) => {
    navigation.navigate('InfluencerDetail', { influencer });
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Top Nigerian Influencers</ThemedText>
      <TextInput
        style={styles.searchInput}
        placeholder="Search influencers..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredInfluencers}
        renderItem={({ item }) => (
          <InfluencerCard 
            influencer={item} 
            onPress={() => handleInfluencerPress(item)}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  followers: {
    fontSize: 14,
    color: '#666',
  },
  searchInput: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: theme.sizes.medium,
    color: theme.colors.text,
  },
});