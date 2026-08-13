import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

const PINK = '#ff6b81';
const BLACK = '#1a1a1a';
const GRAY = '#9e9e9e';
const LIGHT_PINK = '#ffc4d1';

const StatsScreen = ({ onBack, onNext }) => {
  const stats = [
    { label: 'Distance', value: '7580 m', icon: '📍' },
    { label: 'Steps', value: '9832', icon: '👟' },
    { label: 'Points', value: '1248', icon: '⭐' },
  ];

  const workoutBreakdown = [
    { name: 'Dumbbell', calories: 628, color: PINK },
    { name: 'Treadmill', calories: 235, color: LIGHT_PINK },
    { name: 'Rope', calories: 432, color: BLACK },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Statistics</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>⋮</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Main Card */}
          <View style={styles.mainCard}>
            <Text style={styles.dateText}>Today, 8 Jul</Text>
            <View style={styles.kcalContainer}>
              <Text style={styles.kcalValue}>1 883</Text>
              <Text style={styles.kcalLabel}>Kcal</Text>
            </View>
            <TouchableOpacity style={styles.activityButton}>
              <Text style={styles.activityText}>Thank your activity</Text>
            </TouchableOpacity>
          </View>

          {/* Date Selector */}
          <View style={styles.dateSelector}>
            <View style={styles.dateItem}>
              <Text style={styles.dateSelectorLabel}>5</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.dateSelectorLabel}>6</Text>
            </View>
            <View style={[styles.dateItem, styles.dateItemActive]}>
              <Text style={styles.dateSelectorLabelActive}>Today, 8 Jul</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.dateSelectorLabel}>9</Text>
            </View>
            <View style={styles.dateItem}>
              <Text style={styles.dateSelectorLabel}>11</Text>
            </View>
          </View>

          {/* Stats Title */}
          <Text style={styles.statsTitle}>Total Kilocalories</Text>

          {/* Bar Chart */}
          <View style={styles.chartContainer}>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <View key={index} style={styles.barItem}>
                <View style={[styles.bar, styles[`bar${index % 3}`]]} />
              </View>
            ))}
          </View>

          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Text style={styles.statLabel}>{stat.label}</Text>
                <Text style={styles.statValue}>{stat.value}</Text>
              </View>
            ))}
          </View>

          {/* Workout Breakdown */}
          <Text style={styles.breakdownTitle}>Workout Breakdown</Text>
          <View style={styles.breakdownGrid}>
            {workoutBreakdown.map((workout, index) => (
              <TouchableOpacity key={index} style={styles.breakdownCard}>
                <View
                  style={[styles.breakdownIcon, { backgroundColor: workout.color }]}
                >
                  <Text style={styles.breakdownIconText}>
                    {workout.name === 'Dumbbell' ? '🏋️' : workout.name === 'Treadmill' ? '🏃' : '🪢'}
                  </Text>
                </View>
                <Text style={styles.breakdownName}>{workout.name}</Text>
                <Text style={styles.breakdownCalories}>{workout.calories} Kcal</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Next Button */}
          {onNext && (
            <TouchableOpacity style={styles.nextButton} onPress={onNext}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: BLACK,
    fontSize: 28,
    fontWeight: '600',
  },
  headerTitle: {
    color: BLACK,
    fontSize: 18,
    fontWeight: '600',
  },
  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: BLACK,
    fontSize: 20,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  mainCard: {
    backgroundColor: PINK,
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    alignItems: 'center',
  },
  dateText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  kcalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  kcalValue: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: '700',
  },
  kcalLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  activityButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activityText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 28,
  },
  dateItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dateItemActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  dateSelectorLabel: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '600',
  },
  dateSelectorLabelActive: {
    color: BLACK,
    fontSize: 12,
    fontWeight: '600',
  },
  statsTitle: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    marginBottom: 28,
    gap: 4,
  },
  barItem: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bar: {
    width: '100%',
    borderRadius: 6,
  },
  bar0: {
    height: 40,
    backgroundColor: BLACK,
  },
  bar1: {
    height: 70,
    backgroundColor: LIGHT_PINK,
  },
  bar2: {
    height: 50,
    backgroundColor: BLACK,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 107, 129, 0.1)',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  statLabel: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  statValue: {
    color: BLACK,
    fontSize: 14,
    fontWeight: '700',
  },
  breakdownTitle: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  breakdownGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  breakdownCard: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  breakdownIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  breakdownIconText: {
    fontSize: 24,
  },
  breakdownName: {
    color: BLACK,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  breakdownCalories: {
    color: GRAY,
    fontSize: 11,
    fontWeight: '500',
  },
  nextButton: {
    marginTop: 24,
    backgroundColor: PINK,
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default StatsScreen;
