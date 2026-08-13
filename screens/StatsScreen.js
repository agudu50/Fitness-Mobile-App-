import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const PINK = '#ff6b81';
const LIGHT_PINK = '#fff0f3';
const BLACK = '#1a1a1a';
const GRAY = '#8e8e93';

const DATES = [
  { id: 'd1', label: '5 Jul', dayNum: '5' },
  { id: 'd2', label: '6 Jul', dayNum: '6' },
  { id: 'd3', label: '7 Jul', dayNum: '7' },
  { id: 'd4', label: 'Today, 8 Jul', dayNum: '8', isToday: true },
  { id: 'd5', label: '9 Jul', dayNum: '9' },
  { id: 'd6', label: '10 Jul', dayNum: '10' },
];

const STAT_METRICS = [
  { id: 'm1', label: 'Distance', value: '7 580 m', icon: 'navigate-outline', color: '#ff6b81' },
  { id: 'm2', label: 'Steps', value: '9 832', icon: 'walk-outline', color: '#2ed573' },
  { id: 'm3', label: 'Points', value: '1 248', icon: 'star-outline', color: '#ffa502' },
];

const WORKOUT_BREAKDOWN = [
  { id: 'b1', name: 'Dumbbell', calories: 628, icon: 'barbell-outline', color: PINK },
  { id: 'b2', name: 'Treadmill', calories: 235, icon: 'fitness-outline', color: '#70a1ff' },
  { id: 'b3', name: 'Rope Jump', calories: 432, icon: 'repeat-outline', color: '#2ed573' },
];

const WEEK_BARS = [
  { day: 'M', height: 40 },
  { day: 'T', height: 75 },
  { day: 'W', height: 95, active: true },
  { day: 'T', height: 60 },
  { day: 'F', height: 80 },
  { day: 'S', height: 50 },
  { day: 'S', height: 65 },
];

const StatsScreen = ({ navigation }) => {
  const [selectedDateId, setSelectedDateId] = useState('d4');

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('WorkoutList');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Header Top */}
        <View style={styles.headerTop}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            hitSlop={8}
          >
            <Ionicons name="chevron-back" size={24} color={BLACK} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Track Activity</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Main Kilocalories Hero Card */}
          <View style={styles.heroCard}>
            <Text style={styles.dateLabel}>Today, 8 Jul</Text>
            <View style={styles.kcalContainer}>
              <Text style={styles.kcalValue}>1 883</Text>
              <Text style={styles.kcalUnit}>Kcal</Text>
            </View>
            <TouchableOpacity style={styles.activityBadge} activeOpacity={0.85}>
              <Ionicons name="flame" size={14} color="#ffffff" style={{ marginRight: 4 }} />
              <Text style={styles.activityBadgeText}>Total Burned</Text>
            </TouchableOpacity>
          </View>

          {/* Date Selector Row */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dateSelector}
          >
            {DATES.map((item) => {
              const isSelected = item.id === selectedDateId;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.dateChip,
                    isSelected && styles.dateChipActive,
                  ]}
                  onPress={() => setSelectedDateId(item.id)}
                >
                  <Text
                    style={[
                      styles.dateChipText,
                      isSelected && styles.dateChipTextActive,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Total Kilocalories Chart Section */}
          <View style={styles.chartSection}>
            <View style={styles.chartHeader}>
              <Text style={styles.sectionTitle}>Total Kilocalories</Text>
              <Text style={styles.chartSubtext}>Weekly Burn</Text>
            </View>

            <View style={styles.barChartContainer}>
              {WEEK_BARS.map((bar, index) => (
                <View key={index} style={styles.barColumn}>
                  <View style={styles.barTrack}>
                    <View
                      style={[
                        styles.barFill,
                        { height: `${bar.height}%` },
                        bar.active && styles.barFillActive,
                      ]}
                    />
                  </View>
                  <Text style={[styles.barDayText, bar.active && styles.barDayTextActive]}>
                    {bar.day}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Activity Metrics Grid */}
          <View style={styles.metricsGrid}>
            {STAT_METRICS.map((metric) => (
              <View key={metric.id} style={styles.metricCard}>
                <View style={[styles.metricIconCircle, { backgroundColor: 'rgba(255, 107, 129, 0.1)' }]}>
                  <Ionicons name={metric.icon} size={20} color={metric.color} />
                </View>
                <Text style={styles.metricLabel}>{metric.label}</Text>
                <Text style={styles.metricValue}>{metric.value}</Text>
              </View>
            ))}
          </View>

          {/* Workout Breakdown Section */}
          <View style={styles.breakdownSection}>
            <Text style={styles.sectionTitle}>Workout Breakdown</Text>
            <View style={styles.breakdownGrid}>
              {WORKOUT_BREAKDOWN.map((item) => (
                <View key={item.id} style={styles.breakdownCard}>
                  <View style={[styles.breakdownIconCircle, { backgroundColor: LIGHT_PINK }]}>
                    <Ionicons name={item.icon} size={22} color={item.color} />
                  </View>
                  <Text style={styles.breakdownName}>{item.name}</Text>
                  <Text style={styles.breakdownCalories}>{item.calories} Kcal</Text>
                </View>
              ))}
            </View>
          </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f5',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f2f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: BLACK,
    fontSize: 18,
    fontWeight: '700',
  },
  headerPlaceholder: {
    width: 40,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  heroCard: {
    backgroundColor: PINK,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: PINK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  dateLabel: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  kcalContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 16,
    gap: 8,
  },
  kcalValue: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: '800',
  },
  kcalUnit: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  activityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activityBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  dateSelector: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
    paddingVertical: 4,
  },
  dateChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#f0f0f5',
  },
  dateChipActive: {
    backgroundColor: BLACK,
    borderColor: BLACK,
  },
  dateChipText: {
    color: GRAY,
    fontSize: 13,
    fontWeight: '600',
  },
  dateChipTextActive: {
    color: '#ffffff',
    fontWeight: '700',
  },
  chartSection: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#f0f0f5',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: BLACK,
    fontSize: 17,
    fontWeight: '800',
  },
  chartSubtext: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '600',
  },
  barChartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    paddingTop: 10,
  },
  barColumn: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  barTrack: {
    width: 14,
    height: 90,
    backgroundColor: '#f1f2f6',
    borderRadius: 7,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginBottom: 8,
  },
  barFill: {
    width: '100%',
    backgroundColor: '#d1d1d6',
    borderRadius: 7,
  },
  barFillActive: {
    backgroundColor: PINK,
  },
  barDayText: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '600',
  },
  barDayTextActive: {
    color: PINK,
    fontWeight: '800',
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  metricCard: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f5',
  },
  metricIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricLabel: {
    color: GRAY,
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 2,
  },
  metricValue: {
    color: BLACK,
    fontSize: 13,
    fontWeight: '700',
  },
  breakdownSection: {
    marginTop: 4,
  },
  breakdownGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  breakdownCard: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f5',
  },
  breakdownIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  breakdownName: {
    color: BLACK,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
  },
  breakdownCalories: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default StatsScreen;
