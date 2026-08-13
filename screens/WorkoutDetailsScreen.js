import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const PINK = '#ff6b81';
const BLACK = '#1a1a1a';
const GRAY = '#8e8e93';
const GREEN = '#2ed573';

const WorkoutDetailsScreen = ({ route, navigation }) => {
  const workout = route.params?.workout || {
    title: 'Full-Body Workout',
    duration: '25 min',
    calories: 320,
    difficulty: 'Medium',
    description: 'Shift stubborn body fat and build endurance.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    exercises: [
      { id: '1', name: 'Jumping Jacks', duration: '45 sec' },
      { id: '2', name: 'Burpees', duration: '45 sec' },
      { id: '3', name: 'Mountain Climbers', duration: '45 sec' },
    ],
  };

  const [isCompleted, setIsCompleted] = useState(false);

  const toggleWorkoutStatus = () => {
    setIsCompleted((prev) => !prev);
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('WorkoutList');
    }
  };

  const imageSource = typeof workout.image === 'string' ? { uri: workout.image } : workout.image;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.headerTop}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            hitSlop={8}
          >
            <Ionicons name="chevron-back" size={24} color={BLACK} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Workout Details</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Main Workout Image */}
          <View style={styles.imageContainer}>
            <Image
              source={imageSource}
              style={styles.workoutImage}
              resizeMode="cover"
            />
          </View>

          {/* Workout Header Info */}
          <View style={styles.infoSection}>
            <View style={styles.badgeRow}>
              <View style={styles.difficultyBadge}>
                <Text style={styles.difficultyText}>{workout.difficulty}</Text>
              </View>
              <View style={styles.metaBadge}>
                <Ionicons name="time-outline" size={14} color={GRAY} />
                <Text style={styles.metaText}>{workout.duration}</Text>
              </View>
              <View style={styles.metaBadge}>
                <Ionicons name="flame-outline" size={14} color={PINK} />
                <Text style={styles.metaText}>{workout.calories} kcal</Text>
              </View>
            </View>

            <Text style={styles.workoutTitle}>{workout.title}</Text>
            <Text style={styles.workoutDescription}>{workout.description}</Text>
          </View>

          {/* Exercises List */}
          {workout.exercises && workout.exercises.length > 0 && (
            <View style={styles.exercisesSection}>
              <Text style={styles.sectionTitle}>Exercises ({workout.exercises.length})</Text>
              {workout.exercises.map((exercise, index) => (
                <View key={exercise.id || index} style={styles.exerciseItem}>
                  <View style={styles.exerciseIndexBadge}>
                    <Text style={styles.exerciseIndexText}>{index + 1}</Text>
                  </View>
                  <View style={styles.exerciseMainInfo}>
                    <Text style={styles.exerciseName}>{exercise.name}</Text>
                    <Text style={styles.exerciseDuration}>{exercise.duration}</Text>
                  </View>
                  <Ionicons name="checkmark-circle-outline" size={20} color={GRAY} />
                </View>
              ))}
            </View>
          )}
        </ScrollView>

        {/* Action Toggle Button */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={[
              styles.actionButton,
              isCompleted && styles.completedButton,
            ]}
            activeOpacity={0.88}
            onPress={toggleWorkoutStatus}
          >
            <View style={styles.buttonContent}>
              {isCompleted && (
                <Ionicons name="checkmark-circle" size={20} color="#ffffff" style={styles.buttonIcon} />
              )}
              <Text style={styles.actionButtonText}>
                {isCompleted ? 'Completed' : 'Start Workout'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#f1f2f6',
  },
  workoutImage: {
    width: '100%',
    height: '100%',
  },
  infoSection: {
    marginBottom: 24,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  difficultyBadge: {
    backgroundColor: 'rgba(255, 107, 129, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  difficultyText: {
    color: PINK,
    fontSize: 12,
    fontWeight: '700',
  },
  metaBadge: {
    backgroundColor: '#f1f2f6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '600',
  },
  workoutTitle: {
    color: BLACK,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  workoutDescription: {
    color: GRAY,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  exercisesSection: {
    marginTop: 8,
  },
  sectionTitle: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 14,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  exerciseIndexBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  exerciseIndexText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  exerciseMainInfo: {
    flex: 1,
  },
  exerciseName: {
    color: BLACK,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  exerciseDuration: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '500',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f5',
  },
  actionButton: {
    backgroundColor: PINK,
    paddingVertical: 16,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: PINK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  completedButton: {
    backgroundColor: GREEN,
    shadowColor: GREEN,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 6,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});

export default WorkoutDetailsScreen;
