import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import WorkoutCard from '../components/WorkoutCard';

const PINK = '#ff6b81';
const BLACK = '#1a1a1a';
const GRAY = '#8e8e93';

const WORKOUT_DATA = [
  {
    id: '1',
    title: 'Full-Body HIIT',
    duration: '25 min',
    calories: 320,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    difficulty: 'Medium',
    description: 'High-intensity interval training to burn calories and boost overall body endurance.',
    exercises: [
      { id: 'e1', name: 'Jumping Jacks', duration: '45 sec' },
      { id: 'e2', name: 'Burpees', duration: '45 sec' },
      { id: 'e3', name: 'Mountain Climbers', duration: '45 sec' },
      { id: 'e4', name: 'High Knees', duration: '45 sec' },
    ],
  },
  {
    id: '2',
    title: 'Bicep & Arm Sculpt',
    duration: '15 min',
    calories: 180,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    difficulty: 'Easy',
    description: 'Targeted upper body workout designed to tone biceps, triceps, and shoulders.',
    exercises: [
      { id: 'e5', name: 'Bicep Curls', duration: '12 reps' },
      { id: 'e6', name: 'Hammer Curls', duration: '12 reps' },
      { id: 'e7', name: 'Tricep Dips', duration: '15 reps' },
      { id: 'e8', name: 'Push-ups', duration: '10 reps' },
    ],
  },
  {
    id: '3',
    title: 'Core & Ab Crusher',
    duration: '20 min',
    calories: 210,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
    difficulty: 'Hard',
    description: 'Strengthen your midsection and build abdominal strength with focused floor moves.',
    exercises: [
      { id: 'e9', name: 'Plank Hold', duration: '60 sec' },
      { id: 'e10', name: 'Russian Twists', duration: '20 reps' },
      { id: 'e11', name: 'Leg Raises', duration: '15 reps' },
      { id: 'e12', name: 'Bicycle Crunches', duration: '20 reps' },
    ],
  },
  {
    id: '4',
    title: 'Lower Body & Leg Power',
    duration: '30 min',
    calories: 400,
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=800&auto=format&fit=crop',
    difficulty: 'Hard',
    description: 'Build lower body strength and sculpt quad, hamstring, and glute muscle groups.',
    exercises: [
      { id: 'e13', name: 'Bodyweight Squats', duration: '20 reps' },
      { id: 'e14', name: 'Walking Lunges', duration: '16 reps' },
      { id: 'e15', name: 'Glute Bridges', duration: '15 reps' },
      { id: 'e16', name: 'Calf Raises', duration: '25 reps' },
    ],
  },
  {
    id: '5',
    title: 'Morning Yoga & Flexibility',
    duration: '18 min',
    calories: 120,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
    difficulty: 'Easy',
    description: 'Gentle stretching and mobility exercises to awaken your muscles and reduce tension.',
    exercises: [
      { id: 'e17', name: 'Downward Dog Pose', duration: '60 sec' },
      { id: 'e18', name: 'Cobra Pose Stretch', duration: '45 sec' },
      { id: 'e19', name: "Child's Pose Rest", duration: '60 sec' },
      { id: 'e20', name: 'Warrior II Pose', duration: '45 sec' },
    ],
  },
  {
    id: '6',
    title: 'Cardio Blast & Burn',
    duration: '35 min',
    calories: 450,
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop',
    difficulty: 'Medium',
    description: 'High-energy cardiovascular routine to maximize calorie burn and improve heart health.',
    exercises: [
      { id: 'e21', name: 'Sprint Intervals', duration: '30 sec x 5' },
      { id: 'e22', name: 'Box Jumps', duration: '12 reps' },
      { id: 'e23', name: 'Skater Jumps', duration: '45 sec' },
      { id: 'e24', name: 'Jump Rope Session', duration: '3 min' },
    ],
  },
];

const WorkoutListScreen = ({ navigation }) => {
  const handleCardPress = (workout) => {
    navigation.navigate('WorkoutDetails', { workout });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>DAILY ROUTINES</Text>
        <Text style={styles.headerTitle}>Workout Programs</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {WORKOUT_DATA.map((workout) => (
          <WorkoutCard
            key={workout.id}
            image={workout.image}
            title={workout.title}
            duration={workout.duration}
            calories={workout.calories}
            onPress={() => handleCardPress(workout)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f5',
    backgroundColor: '#ffffff',
  },
  headerSubtitle: {
    color: PINK,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 4,
  },
  headerTitle: {
    color: BLACK,
    fontSize: 24,
    fontWeight: '800',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
});

export default WorkoutListScreen;
