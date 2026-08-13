import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FitnessScreen from './FitnessScreen';
import CalendarScreen from './CalendarScreen';
import WorkoutScreen from './WorkoutScreen';
import StatsScreen from './StatsScreen';
import FriendsScreen from './FriendsScreen';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [screen, setScreen] = useState('landing');

  if (screen === 'fitness') {
    return (
      <FitnessScreen
        onBack={() => setScreen('landing')}
        onNext={() => setScreen('calendar')}
      />
    );
  }

  if (screen === 'calendar') {
    return (
      <CalendarScreen
        onBack={() => setScreen('fitness')}
        onNext={() => setScreen('workout')}
      />
    );
  }

  if (screen === 'workout') {
    return (
      <WorkoutScreen
        onBack={() => setScreen('calendar')}
        onNext={() => setScreen('stats')}
      />
    );
  }

  if (screen === 'stats') {
    return (
      <StatsScreen
        onBack={() => setScreen('workout')}
        onNext={() => setScreen('friends')}
      />
    );
  }

  if (screen === 'friends') {
    return (
      <FriendsScreen
        onBack={() => setScreen('stats')}
        onNext={() => setScreen('landing')}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.decorTopRight} />
        <View style={styles.decorCenter} />

        <View style={styles.header}>
          <Text style={styles.title}>Pump House</Text>
          <Text style={styles.subtitle}>FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK
          SPECIFICALLY FOR YOU</Text>
        </View>

        <TouchableOpacity
          style={styles.cta}
          activeOpacity={0.9}
          onPress={() => setScreen('fitness')}
        >
          <Text style={styles.ctaText}>Next</Text>
        </TouchableOpacity>

        {/* <View style={styles.modelCrop}>
          <Image
            source={require('./assets/lady-1.png')}
            style={styles.modelInside}
            resizeMode="cover"
          />
          <View style={styles.modelTint} />
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const PINK = '#ff6b81';

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: PINK },
  container: {
    flex: 1,
    backgroundColor: PINK,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#fff',
    fontSize: 44,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 12,
    marginTop: 12,
    textAlign: 'center',
    lineHeight: 16,
    width: width * 0.8,
  },
  cta: {
    marginTop: 28,
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 14,
    elevation: 3,
    zIndex: 10,
  },
  ctaText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '600',
  },
  modelCrop: {
    position: 'absolute',
    width: width * 0.72,
    height: height * 0.58,
    bottom: -20,
    alignSelf: 'center',
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: PINK,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    zIndex: 1,
  },
  modelInside: {
    width: width * 1.1,
    height: height * 0.65,
    transform: [{ translateY: -20 }, { translateX: -70 }],
  },
  modelTint: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: PINK,
    opacity: 0.04,
  },
  decorTopRight: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 6,
    borderColor: 'rgba(255,255,255,0.18)',
    zIndex: 0,
    elevation: 1,
  },
  decorCenter: {
    position: 'absolute',
    top: 120,
    width: width * 0.95,
    height: width * 0.95,
    borderRadius: width * 0.96 / 2,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.12)',
    zIndex: 1,
    elevation: 0,
  }
});
