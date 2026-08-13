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
const LIGHT_PINK = '#ffc4d1';
const VERY_LIGHT_PINK = '#ffe4eb';

const FriendsScreen = ({ onBack, onNext }) => {
  const profiles = [
    { id: 1, position: 'top-left', size: 48 },
    { id: 2, position: 'top-right', size: 56 },
    { id: 3, position: 'center', size: 80 },
    { id: 4, position: 'bottom-left', size: 56 },
    { id: 5, position: 'bottom-right', size: 48 },
    { id: 6, position: 'left', size: 52 },
    { id: 7, position: 'right', size: 52 },
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
          <Text style={styles.headerTitle}>Find Friends</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>⋮</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Circular Friends Display */}
          <View style={styles.circleContainer}>
            {/* Outer circles - decorative rings */}
            <View style={styles.outerRing} />
            <View style={styles.middleRing} />

            {/* Profile images arranged in circles */}
            <View style={styles.profilesWrapper}>
              {/* Top Left */}
              <View style={[styles.profileCircle, styles.posTopLeft, { width: 48, height: 48 }]}>
                <Image
                  source={require('./assets/lady-1.png')}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              </View>

              {/* Top Right */}
              <View style={[styles.profileCircle, styles.posTopRight, { width: 56, height: 56 }]}>
                <Image
                  source={require('./assets/lady-1.png')}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              </View>

              {/* Center - Largest */}
              <View style={[styles.profileCircle, styles.posCenter, { width: 80, height: 80 }]}>
                <Image
                  source={require('./assets/lady-1.png')}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              </View>

              {/* Bottom Left */}
              <View style={[styles.profileCircle, styles.posBottomLeft, { width: 48, height: 48 }]}>
                <Image
                  source={require('./assets/lady-1.png')}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              </View>

              {/* Bottom Right */}
              <View style={[styles.profileCircle, styles.posBottomRight, { width: 56, height: 56 }]}>
                <Image
                  source={require('./assets/lady-1.png')}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              </View>

              {/* Left */}
              <View style={[styles.profileCircle, styles.posLeft, { width: 52, height: 52 }]}>
                <Image
                  source={require('./assets/lady-1.png')}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              </View>

              {/* Right */}
              <View style={[styles.profileCircle, styles.posRight, { width: 52, height: 52 }]}>
                <Image
                  source={require('./assets/lady-1.png')}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>

          {/* Text Section */}
          <View style={styles.textSection}>
            <Text style={styles.mainText}>Best Fitness app to</Text>
            <Text style={styles.mainText}>make Closest Friends</Text>
          </View>

          {/* Social Buttons */}
          <TouchableOpacity style={styles.facebookButton}>
            <Text style={styles.fbIcon}>f</Text>
            <Text style={styles.buttonText}>Invite from Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.instagramButton}>
            <Text style={styles.igIcon}>📷</Text>
            <Text style={styles.buttonText}>Invite from Instagram</Text>
          </TouchableOpacity>

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
    paddingBottom: 150,
    alignItems: 'center',
  },
  circleContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    position: 'relative',
  },
  outerRing: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 1.5,
    borderColor: VERY_LIGHT_PINK,
  },
  middleRing: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: LIGHT_PINK,
  },
  profilesWrapper: {
    position: 'relative',
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCircle: {
    borderRadius: 9999,
    overflow: 'hidden',
    backgroundColor: LIGHT_PINK,
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  posCenter: {
    top: '50%',
    left: '50%',
    marginTop: -40,
    marginLeft: -40,
    borderColor: '#ffffff',
    borderWidth: 3,
  },
  posTopLeft: {
    top: 0,
    left: 0,
  },
  posTopRight: {
    top: 10,
    right: 20,
  },
  posBottomLeft: {
    bottom: 20,
    left: 10,
  },
  posBottomRight: {
    bottom: 0,
    right: 0,
  },
  posLeft: {
    top: '50%',
    left: 0,
    marginTop: -26,
  },
  posRight: {
    top: '50%',
    right: 0,
    marginTop: -26,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  mainText: {
    color: BLACK,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
  },
  facebookButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#1877F2',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    gap: 8,
  },
  fbIcon: {
    color: '#1877F2',
    fontSize: 20,
    fontWeight: '700',
  },
  instagramButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#E1306C',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
  },
  igIcon: {
    fontSize: 20,
  },
  buttonText: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    width: '100%',
    backgroundColor: PINK,
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default FriendsScreen;
