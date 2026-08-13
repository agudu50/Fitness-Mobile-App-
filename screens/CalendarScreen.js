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

const SCHEDULED_WORKOUTS = [
  {
    id: 'c1',
    title: 'Indoor Run & Sprint',
    duration: '35 min',
    distance: '7.12 km',
    calories: 452,
    difficulty: 'Medium',
    description: 'High-energy indoor treadmill session with alternating sprint intervals.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop',
    exercises: [
      { id: 'se1', name: 'Warm-up Jog', duration: '5 min' },
      { id: 'se2', name: 'Sprint Intervals', duration: '20 min' },
      { id: 'se3', name: 'Cool-down Walk', duration: '10 min' },
    ],
  },
  {
    id: 'c2',
    title: 'Outdoor Cycling Session',
    duration: '24 min',
    distance: '4.22 km',
    calories: 248,
    difficulty: 'Easy',
    description: 'Scenic outdoor cycling session building leg cardiovascular endurance.',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=800&auto=format&fit=crop',
    exercises: [
      { id: 'se4', name: 'Steady Pace Ride', duration: '15 min' },
      { id: 'se5', name: 'Hill Climb Push', duration: '9 min' },
    ],
  },
  {
    id: 'c3',
    title: 'Core & Mobility Stretch',
    duration: '20 min',
    distance: 'N/A',
    calories: 190,
    difficulty: 'Easy',
    description: 'Abdominal floor work and soothing stretching mobility poses.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
    exercises: [
      { id: 'se6', name: 'Plank Hold', duration: '60 sec' },
      { id: 'se7', name: 'Cobra Pose', duration: '45 sec' },
    ],
  },
];

const CalendarScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(15);

  const daysInMonth = 31;
  const firstDayOffset = 3; // Wednesday
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOffset }, () => null);

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('WorkoutList');
    }
  };

  const handleWorkoutPress = (workout) => {
    navigation.navigate('WorkoutDetails', { workout });
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
          <Text style={styles.headerTitle}>Workout Calendar</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Selected Month / Date Banner */}
          <View style={styles.dateBanner}>
            <Ionicons name="calendar-outline" size={20} color={PINK} />
            <Text style={styles.dateBannerText}>August 2026</Text>
          </View>

          {/* Calendar Grid Container */}
          <View style={styles.calendarContainer}>
            {/* Day Labels Row */}
            <View style={styles.dayLabelsRow}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <View key={index} style={styles.dayLabelCell}>
                  <Text style={styles.dayLabelText}>{day}</Text>
                </View>
              ))}
            </View>

            {/* Dates Grid */}
            <View style={styles.datesGrid}>
              {[...emptyDays, ...days].map((day, index) => {
                const isSelected = day === selectedDate;
                return (
                  <TouchableOpacity
                    key={index}
                    disabled={!day}
                    style={[
                      styles.dateCell,
                      isSelected && styles.selectedDateCell,
                    ]}
                    onPress={() => day && setSelectedDate(day)}
                  >
                    {day && (
                      <Text
                        style={[
                          styles.dateText,
                          isSelected && styles.selectedDateText,
                        ]}
                      >
                        {day}
                      </Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Scheduled Workouts Section */}
          <View style={styles.workoutsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Scheduled Workouts</Text>
              <Text style={styles.badgeText}>Aug {selectedDate}</Text>
            </View>

            {SCHEDULED_WORKOUTS.map((workout) => (
              <TouchableOpacity
                key={workout.id}
                style={styles.workoutCard}
                activeOpacity={0.85}
                onPress={() => handleWorkoutPress(workout)}
              >
                <View style={styles.iconCircle}>
                  <Ionicons name="fitness-outline" size={24} color={PINK} />
                </View>
                <View style={styles.workoutInfo}>
                  <Text style={styles.workoutName}>{workout.title}</Text>
                  <Text style={styles.workoutDuration}>{workout.duration}</Text>
                </View>
                <View style={styles.workoutMeta}>
                  <View style={styles.metaRow}>
                    <Ionicons name="flame-outline" size={13} color={PINK} />
                    <Text style={styles.metaText}>{workout.calories} kcal</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color={GRAY} style={{ marginTop: 4 }} />
                </View>
              </TouchableOpacity>
            ))}
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
  dateBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: LIGHT_PINK,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 16,
  },
  dateBannerText: {
    color: PINK,
    fontSize: 15,
    fontWeight: '700',
  },
  calendarContainer: {
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
  dayLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dayLabelCell: {
    flex: 1,
    alignItems: 'center',
  },
  dayLabelText: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '700',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    borderRadius: 10,
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
    fontWeight: '700',
  },
  workoutsSection: {
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    color: BLACK,
    fontSize: 18,
    fontWeight: '800',
  },
  badgeText: {
    backgroundColor: LIGHT_PINK,
    color: PINK,
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  workoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0f0f5',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: LIGHT_PINK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  workoutInfo: {
    flex: 1,
  },
  workoutName: {
    color: BLACK,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  workoutDuration: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '500',
  },
  workoutMeta: {
    alignItems: 'flex-end',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default CalendarScreen;
