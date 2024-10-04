import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from './ThemedText';
import { useTheme } from './theme-provider';
import { Ionicons } from '@expo/vector-icons';

type ActivityItemProps = {
  type: 'like' | 'comment' | 'follow';
  username: string;
  time: string;
  onPress: () => void;
};

export const ActivityItem: React.FC<ActivityItemProps> = ({ type, username, time, onPress }) => {
  const { theme } = useTheme();

  const getIcon = () => {
    switch (type) {
      case 'like':
        return 'heart';
      case 'comment':
        return 'chatbubble';
      case 'follow':
        return 'person-add';
      default:
        return 'alert-circle';
    }
  };

  const getMessage = () => {
    switch (type) {
      case 'like':
        return 'liked your post';
      case 'comment':
        return 'commented on your post';
      case 'follow':
        return 'started following you';
      default:
        return 'interacted with you';
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    icon: {
      marginRight: 10,
    },
    content: {
      flex: 1,
    },
    username: {
      fontWeight: 'bold',
    },
    time: {
      color: theme.colors.textLight,
      fontSize: theme.sizes.small,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name={getIcon()} size={24} color={theme.colors.primary} style={styles.icon} />
      <View style={styles.content}>
        <ThemedText>
          <ThemedText style={styles.username}>{username}</ThemedText> {getMessage()}
        </ThemedText>
        <ThemedText style={styles.time}>{time}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};