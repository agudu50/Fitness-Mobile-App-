import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');

const PINK = '#ff6b81';
const BLACK = '#1a1a1a';
const GRAY = '#9e9e9e';

const WorkoutScreen = ({ onBack, onNext }) => {
  const exercises = [
    { id: 1, name: 'Bicep', icon: '💪' },
    { id: 2, name: 'Body-Back', icon: '🏋️' },
    { id: 3, name: 'Body-Butt', icon: '🍑' },
    { id: 4, name: 'Legs and Core', icon: '🦵' },
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
          <Text style={styles.headerTitle}>Workout</Text>
          <View style={styles.menuButton}>
            <Text style={styles.menuText}>⋮</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Workout Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/lady-1.png')}
              style={styles.workoutImage}
              resizeMode="cover"
            />
          </View>

          {/* Workout Info */}
          <View style={styles.workoutInfo}>
            <View style={styles.difficultyRow}>
              <Text style={styles.difficulty}>Easy</Text>
              <Text style={styles.duration}>4 min</Text>
            </View>
            <Text style={styles.workoutTitle}>Full-Body Workout</Text>
            <Text style={styles.workoutDescription}>
              Shift stubborn body fat and build muscle
            </Text>
          </View>

          {/* Play Button */}
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>

          {/* Exercises Section */}
          <View style={styles.exercisesSection}>
            <Text style={styles.exercisesTitle}>Exercises</Text>
            {exercises.map((exercise, index) => (
              <TouchableOpacity key={exercise.id} style={styles.exerciseItem}>
                <View style={styles.exerciseLeft}>
                  <Text style={styles.exerciseIcon}>{exercise.icon}</Text>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                </View>
                <Text style={styles.exerciseArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Start Button */}
        <TouchableOpacity style={styles.startButton} onPress={onNext}>
          <Text style={styles.startButtonText}>Start Workout</Text>
        </TouchableOpacity>
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
    backgroundColor: 'rgba(255, 192, 203, 0.2)',
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
  imageContainer: {
    width: width - 40,
    height: 240,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 24,
    marginTop: 12,
    backgroundColor: PINK,
  },
  workoutImage: {
    width: '100%',
    height: '100%',
  },
  workoutInfo: {
    marginBottom: 20,
  },
  difficultyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  difficulty: {
    backgroundColor: 'rgba(255, 107, 129, 0.1)',
    color: PINK,
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  duration: {
    color: GRAY,
    fontSize: 12,
    fontWeight: '600',
  },
  workoutTitle: {
    color: BLACK,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  workoutDescription: {
    color: GRAY,
    fontSize: 14,
    fontWeight: '400',
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 32,
  },
  playIcon: {
    color: '#ffffff',
    fontSize: 24,
    marginLeft: 4,
  },
  exercisesSection: {
    marginBottom: 20,
  },
  exercisesTitle: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  exerciseLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  exerciseIcon: {
    fontSize: 24,
  },
  exerciseName: {
    color: BLACK,
    fontSize: 14,
    fontWeight: '600',
  },
  exerciseArrow: {
    color: GRAY,
    fontSize: 20,
    fontWeight: '600',
  },
  startButton: {
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
  startButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default WorkoutScreen;
