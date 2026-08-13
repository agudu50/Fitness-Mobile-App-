import React, { useState } from 'react';
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
const LIGHT_PINK = '#ffc4d1';
const GRAY = '#9e9e9e';
const BLACK = '#1a1a1a';

const CalendarScreen = ({ onBack, onNext }) => {
  const [selectedDate, setSelectedDate] = useState(11);

  const daysInMonth = 31;
  const firstDay = 1; // Thursday
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, () => null);

  const workouts = [
    { id: 1, name: 'Indoor Run', duration: '35 min', distance: '7.12 km', calories: 452 },
    { id: 2, name: 'Outdoor Cycle', duration: '24 min', distance: '4.22 km', calories: 248 },
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
          <Text style={styles.headerTitle}>Calendar</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>⋮</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Date Display */}
          <Text style={styles.dateDisplay}>Thursday, 08 July</Text>

          {/* Calendar Grid */}
          <View style={styles.calendarContainer}>
            {/* Day labels */}
            <View style={styles.dayLabelsRow}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <View key={index} style={styles.dayLabelCell}>
                  <Text style={styles.dayLabel}>{day}</Text>
                </View>
              ))}
            </View>

            {/* Calendar dates */}
            <View style={styles.datesGrid}>
              {[...emptyDays, ...days].map((day, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dateCell,
                    day === selectedDate && styles.selectedDateCell,
                  ]}
                  onPress={() => day && setSelectedDate(day)}
                >
                  {day && (
                    <Text
                      style={[
                        styles.dateText,
                        day === selectedDate && styles.selectedDateText,
                      ]}
                    >
                      {day}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Workouts Section */}
          <View style={styles.workoutsSection}>
            <View style={styles.workoutsHeader}>
              <Text style={styles.workoutsTitle}>8 Workouts</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.workoutsSubtitle}>Get ready for Workouts</Text>

            {workouts.map((workout) => (
              <TouchableOpacity
                key={workout.id}
                style={styles.workoutCard}
                onPress={onNext}
              >
                <View style={[styles.workoutIcon, { backgroundColor: PINK }]}>
                  <Text style={styles.workoutIconText}>🏃</Text>
                </View>
                <View style={styles.workoutInfo}>
                  <Text style={styles.workoutName}>{workout.name}</Text>
                  <Text style={styles.workoutDuration}>{workout.duration}</Text>
                </View>
                <View style={styles.workoutStats}>
                  <Text style={styles.workoutDistance}>{workout.distance}</Text>
                  <Text style={styles.workoutCalories}>⚡{workout.calories} kcal</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Next Button */}
        {onNext && (
          <TouchableOpacity style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: LIGHT_PINK,
  },
  container: {
    flex: 1,
    backgroundColor: LIGHT_PINK,
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
  dateDisplay: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  calendarContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  dayLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dayLabelCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayLabel: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '600',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dateCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 12,
  },
  selectedDateCell: {
    backgroundColor: PINK,
  },
  dateText: {
    color: BLACK,
    fontSize: 14,
    fontWeight: '600',
  },
  selectedDateText: {
    color: '#ffffff',
  },
  workoutsSection: {
    marginBottom: 20,
  },
  workoutsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  workoutsTitle: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '700',
  },
  seeAll: {
    color: PINK,
    fontSize: 14,
    fontWeight: '600',
  },
  workoutsSubtitle: {
    color: GRAY,
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 16,
  },
  workoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  workoutIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  workoutIconText: {
    fontSize: 28,
  },
  workoutInfo: {
    flex: 1,
  },
  workoutName: {
    color: BLACK,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  workoutDuration: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '400',
  },
  workoutStats: {
    alignItems: 'flex-end',
  },
  workoutDistance: {
    color: BLACK,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  workoutCalories: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '400',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: PINK,
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default CalendarScreen;
