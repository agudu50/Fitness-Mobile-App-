import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const PINK = '#ff6b81';
const LIGHT_PINK = '#ffc4d1';
const VERY_LIGHT_PINK = '#ffe4eb';
const GRAY_PINK = '#ffb3c1';
const BLACK = '#1a1a1a';
const GRAY = '#9e9e9e';

const FitnessScreen = ({ onBack, onNext }) => {
  const [activeUser, setActiveUser] = useState(0);

  const users = [
    {
      id: 1,
      name: 'Sarah-Jay',
      workouts: 5,
      kcal: 460,
      avatar: require('./assets/profile-1.jpg'),
      bgColor: PINK,
    },
    {
      id: 2,
      name: 'Jessica John',
      workouts: 5,
      kcal: 240,
      avatar: require('./assets/profile-2.jpg'),
      bgColor: BLACK,
    },
    {
      id: 3,
      name: 'Lina Smith',
      workouts: 8,
      kcal: 500,
      avatar: require('./assets/profile-3.jpg'),
      bgColor: PINK,
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* Header with back button and menu */}
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Playing</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>⋮</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Circular Progress Indicator */}
          <View style={styles.circleContainer}>
            <View style={styles.circleWrapper}>
              {/* Outer ring - 80% pink, 20% gray pink gradient */}
              <LinearGradient
                colors={[PINK, PINK, GRAY_PINK]}
                locations={[0, 0.8, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.ring, styles.ring1]}
              >
                <View style={styles.ring1Inner} />
              </LinearGradient>

              {/* Middle ring - black to gray gradient */}
              <LinearGradient
                colors={[BLACK, GRAY]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[styles.ring, styles.ring2]}
              >
                <View style={styles.ring2Inner} />
              </LinearGradient>

              {/* Inner ring */}
              <View style={[styles.ring, styles.ring3]} />

              {/* Center content */}
              <View style={styles.circleCenterContent}>
                <Text style={styles.todayLabel}>Today</Text>
                <Text style={styles.kcalValue}>2100</Text>
                <Text style={styles.kcalLabel}>Kcal</Text>
              </View>
            </View>
          </View>

          {/* Users List */}
          <View style={styles.usersContainer}>
            {users.map((user, index) => (
              <View key={user.id} style={[styles.userCard, { backgroundColor: user.bgColor }]}>
                <View style={styles.userLeftContent}>
                  <View style={styles.avatarContainer}>
                    <Image
                      source={user.avatar}
                      style={styles.avatar}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.userInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.workoutCount}>{user.workouts} workouts</Text>
                  </View>
                </View>
                <View style={styles.kcalBadge}>
                  <Text style={styles.flameIcon}>🔥</Text>
                  <Text style={styles.kcalText}>{user.kcal} Kcal</Text>
                </View>
              </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: BLACK,
    fontSize: 24,
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
    alignItems: 'center',
  },
  circleContainer: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    maxHeight: 380,
  },
  circleWrapper: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ring: {
    position: 'absolute',
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring1: {
    width: '90%',
    aspectRatio: 1,
  },
  ring1Inner: {
    width: '78%',
    aspectRatio: 1,
    borderRadius: 9999,
    backgroundColor: '#ffffff',
  },
  ring2: {
    width: '70%',
    aspectRatio: 1,
  },
  ring2Inner: {
    width: '76%',
    aspectRatio: 1,
    borderRadius: 9999,
    backgroundColor: '#ffffff',
  },
  ring3: {
    width: '40%',
    aspectRatio: 1,
    borderColor: BLACK,
    borderWidth: 6,
  },
  progressBg: {
    position: 'absolute',
    width: '85%',
    aspectRatio: 1,
    borderRadius: 9999,
    borderWidth: 15,
    borderColor: GRAY,
  },
  progressFill: {
    position: 'absolute',
    width: '85%',
    aspectRatio: 1,
    borderRadius: 9999,
    borderWidth: 15,
    borderColor: 'transparent',
    borderTopColor: BLACK,
    borderRightColor: BLACK,
    transform: [{ rotate: '45deg' }],
  },
  circleCenterContent: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  todayLabel: {
    color: BLACK,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  kcalValue: {
    color: BLACK,
    fontSize: 28,
    fontWeight: '700',
  },
  kcalLabel: {
    color: GRAY,
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
  usersContainer: {
    width: '100%',
    gap: 16,
  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 8,
  },
  userLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginRight: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  workoutCount: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 13,
    fontWeight: '400',
  },
  kcalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
  },
  flameIcon: {
    fontSize: 16,
  },
  kcalText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  nextButton: {
    position: 'absolute',
    bottom: 5,
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

export default FitnessScreen;
