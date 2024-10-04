import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Switch, TouchableOpacity, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/components/theme-provider';
import { ActivityItem } from '@/components/ActivityItem';
import { Ionicons } from '@expo/vector-icons';

type Activity = {
  id: string;
  type: 'like' | 'comment' | 'follow';
  username: string;
  time: string;
};

const recentActivities: Activity[] = [
  { id: '1', type: 'like', username: 'user1', time: '2h ago' },
  { id: '2', type: 'comment', username: 'user2', time: '3h ago' },
  { id: '3', type: 'follow', username: 'user3', time: '5h ago' },
  { id: '4', type: 'like', username: 'user4', time: '1d ago' },
  { id: '5', type: 'comment', username: 'user5', time: '2d ago' },
];

export default function ProfileScreen() {
  const { theme, toggleTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContent: {
      padding: 20,
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 5,
    },
    bio: {
      fontSize: 16,
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: 10,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    statItem: {
      alignItems: 'center',
    },
    statValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
    },
    statLabel: {
      fontSize: 14,
      color: theme.colors.text,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    rowText: {
      fontSize: 16,
      color: theme.colors.text,
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: theme.colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    activitySection: {
      marginTop: 20,
    },
    activityTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme.colors.text,
    },
  });

  const renderActivityItem = ({ item }: { item: Activity }) => (
    <ActivityItem
      type={item.type}
      username={item.username}
      time={item.time}
      onPress={() => console.log(`Pressed activity: ${item.id}`)}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://placekitten.com/200/200' }}
            style={styles.avatar}
            accessibilityLabel="User profile picture"
          />
          <ThemedText style={styles.name}>John Doe</ThemedText>
          <ThemedText style={styles.bio}>Influencer | Content Creator | Tech Enthusiast</ThemedText>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText style={styles.statValue}>10K</ThemedText>
            <ThemedText style={styles.statLabel}>Followers</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText style={styles.statValue}>500</ThemedText>
            <ThemedText style={styles.statLabel}>Following</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText style={styles.statValue}>250</ThemedText>
            <ThemedText style={styles.statLabel}>Posts</ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Account Information</ThemedText>
          <View style={styles.row}>
            <ThemedText style={styles.rowText}>Email</ThemedText>
            <ThemedText style={styles.rowText}>john.doe@example.com</ThemedText>
          </View>
          <View style={styles.row}>
            <ThemedText style={styles.rowText}>Phone</ThemedText>
            <ThemedText style={styles.rowText}>+234 123 456 7890</ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Settings</ThemedText>
          <View style={styles.row}>
            <ThemedText style={styles.rowText}>Notifications</ThemedText>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
              accessibilityLabel="Toggle notifications"
            />
          </View>
          <View style={styles.row}>
            <ThemedText style={styles.rowText}>Dark Mode</ThemedText>
            <Switch
              value={theme.dark}
              onValueChange={toggleTheme}
              trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
              accessibilityLabel="Toggle dark mode"
            />
          </View>
        </View>

        <View style={styles.activitySection}>
          <ThemedText style={styles.activityTitle}>Recent Activity</ThemedText>
          <FlatList
            data={recentActivities}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => console.log('Edit Profile')}
          accessibilityLabel="Edit profile"
          accessibilityRole="button"
        >
          <ThemedText style={styles.buttonText}>Edit Profile</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.colors.error, marginTop: 10 }]} 
          onPress={() => console.log('Log Out')}
          accessibilityLabel="Log out"
          accessibilityRole="button"
        >
          <ThemedText style={styles.buttonText}>Log Out</ThemedText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}