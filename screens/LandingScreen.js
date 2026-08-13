import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');
const PINK_BG = '#ff5379';

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* Background Decorative Concentric Rings */}
        <View style={[styles.ring, styles.ringTopRight1]} />
        <View style={[styles.ring, styles.ringTopRight2]} />
        <View style={[styles.ring, styles.ringTopRight3]} />
        <View style={[styles.ring, styles.ringCenter1]} />
        <View style={[styles.ring, styles.ringCenter2]} />
        <View style={[styles.ring, styles.ringCenter3]} />

        {/* Title & Subtitle Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Pump House</Text>
          <Text style={styles.subtitle}>
            FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK SPECIFICALLY FOR YOU
          </Text>
        </View>

        {/* CTA Button */}
        <TouchableOpacity
          style={styles.nextButton}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('WorkoutList')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        {/* Model Image at Bottom */}
        <View style={styles.modelContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop' }}
            style={styles.modelImage}
            resizeMode="cover"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: PINK_BG,
  },
  container: {
    flex: 1,
    backgroundColor: PINK_BG,
    alignItems: 'center',
    paddingTop: 50,
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 20,
    zIndex: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: '800',
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 14,
    textAlign: 'center',
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  nextButton: {
    marginTop: 32,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 24,
    zIndex: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  nextButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
  },
  modelContainer: {
    position: 'absolute',
    bottom: 20,
    width: width * 0.88,
    height: height * 0.48,
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  modelImage: {
    width: '100%',
    height: '100%',
  },
  ring: {
    position: 'absolute',
    borderRadius: 9999,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    zIndex: 1,
  },
  ringTopRight1: {
    top: -60,
    right: -60,
    width: 220,
    height: 220,
  },
  ringTopRight2: {
    top: -100,
    right: -100,
    width: 320,
    height: 320,
  },
  ringTopRight3: {
    top: -140,
    right: -140,
    width: 420,
    height: 420,
  },
  ringCenter1: {
    top: 140,
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: (width * 0.9) / 2,
    borderColor: 'rgba(255, 255, 255, 0.18)',
  },
  ringCenter2: {
    top: 80,
    width: width * 1.2,
    height: width * 1.2,
    borderRadius: (width * 1.2) / 2,
    borderColor: 'rgba(255, 255, 255, 0.14)',
  },
  ringCenter3: {
    top: 20,
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: (width * 1.5) / 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default LandingScreen;
