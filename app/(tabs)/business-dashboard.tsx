import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LineChart } from 'react-native-chart-kit';
import { theme } from '../../theme';

const screenWidth = Dimensions.get('window').width;

export default function BusinessDashboardScreen() {
  const campaignData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Business Dashboard</ThemedText>
      
      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Campaign Performance</ThemedText>
        <LineChart
          data={campaignData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: theme.colors.primary,
            backgroundGradientFrom: theme.colors.primary,
            backgroundGradientTo: theme.colors.secondary,
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: theme.colors.secondary
            }
          }}
          bezier
          style={styles.chart}
        />
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Key Metrics</ThemedText>
        <ThemedView style={styles.metricsContainer}>
          <ThemedView style={styles.metric}>
            <ThemedText style={styles.metricValue}>250K</ThemedText>
            <ThemedText style={styles.metricLabel}>Reach</ThemedText>
          </ThemedView>
          <ThemedView style={styles.metric}>
            <ThemedText style={styles.metricValue}>15%</ThemedText>
            <ThemedText style={styles.metricLabel}>Engagement Rate</ThemedText>
          </ThemedView>
          <ThemedView style={styles.metric}>
            <ThemedText style={styles.metricValue}>₦500K</ThemedText>
            <ThemedText style={styles.metricLabel}>Revenue</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Recent Activities</ThemedText>
        <ThemedText style={styles.activityItem}>• New campaign started with Influencer A</ThemedText>
        <ThemedText style={styles.activityItem}>• Reached 100K followers milestone</ThemedText>
        <ThemedText style={styles.activityItem}>• Collaboration proposal from Brand X</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Top Performing Influencers</ThemedText>
        <ThemedText style={styles.influencerItem}>1. Aisha - 500K followers</ThemedText>
        <ThemedText style={styles.influencerItem}>2. Chidi - 750K followers</ThemedText>
        <ThemedText style={styles.influencerItem}>3. Ngozi - 1M followers</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: theme.colors.text,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: theme.colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: theme.colors.text,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metric: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  metricLabel: {
    fontSize: 14,
    color: theme.colors.textLight,
  },
  activityItem: {
    fontSize: 16,
    marginBottom: 10,
    color: theme.colors.text,
  },
  influencerItem: {
    fontSize: 16,
    marginBottom: 10,
    color: theme.colors.text,
  },
});