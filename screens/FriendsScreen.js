import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const PINK = '#ff6b81';
const LIGHT_PINK = '#fff0f3';
const VERY_LIGHT_PINK = '#ffe4eb';
const BLACK = '#1a1a1a';
const GRAY = '#8e8e93';

const AVATARS = [
  { id: '1', name: 'Sarah', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop', position: 'center', size: 76 },
  { id: '2', name: 'Jessica', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop', position: 'topLeft', size: 48 },
  { id: '3', name: 'Lina', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop', position: 'topRight', size: 54 },
  { id: '4', name: 'Alex', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop', position: 'bottomLeft', size: 50 },
  { id: '5', name: 'Emma', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop', position: 'bottomRight', size: 52 },
  { id: '6', name: 'David', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop', position: 'left', size: 44 },
  { id: '7', name: 'Chloe', image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=300&auto=format&fit=crop', position: 'right', size: 46 },
];

const FriendsScreen = ({ navigation }) => {
  const [invitedFb, setInvitedFb] = useState(false);
  const [invitedIg, setInvitedIg] = useState(false);

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('WorkoutList');
    }
  };

  const handleInviteFb = () => {
    setInvitedFb((prev) => !prev);
  };

  const handleInviteIg = () => {
    setInvitedIg((prev) => !prev);
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
          <Text style={styles.headerTitle}>Find Friends</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Circular Orbit Display */}
          <View style={styles.circleContainer}>
            <View style={styles.outerRing} />
            <View style={styles.middleRing} />

            <View style={styles.profilesWrapper}>
              {AVATARS.map((avatar) => {
                let posStyle = styles.posCenter;
                if (avatar.position === 'topLeft') posStyle = styles.posTopLeft;
                if (avatar.position === 'topRight') posStyle = styles.posTopRight;
                if (avatar.position === 'bottomLeft') posStyle = styles.posBottomLeft;
                if (avatar.position === 'bottomRight') posStyle = styles.posBottomRight;
                if (avatar.position === 'left') posStyle = styles.posLeft;
                if (avatar.position === 'right') posStyle = styles.posRight;

                return (
                  <View
                    key={avatar.id}
                    style={[
                      styles.profileCircle,
                      posStyle,
                      { width: avatar.size, height: avatar.size },
                    ]}
                  >
                    <Image
                      source={{ uri: avatar.image }}
                      style={styles.profileImage}
                      resizeMode="cover"
                    />
                  </View>
                );
              })}
            </View>
          </View>

          {/* Tagline Text Section */}
          <View style={styles.textSection}>
            <Text style={styles.mainText}>Best Fitness app to</Text>
            <Text style={styles.mainTextHighlight}>make Closest Friends</Text>
            <Text style={styles.subText}>
              Connect with friends, track workout achievements together, and stay motivated on your daily fitness journey.
            </Text>
          </View>

          {/* Social Invite Action Buttons */}
          <TouchableOpacity
            style={[styles.facebookButton, invitedFb && styles.invitedButton]}
            activeOpacity={0.88}
            onPress={handleInviteFb}
          >
            <Ionicons
              name="logo-facebook"
              size={22}
              color={invitedFb ? '#ffffff' : '#1877F2'}
            />
            <Text style={[styles.buttonText, invitedFb && styles.invitedButtonText]}>
              {invitedFb ? '✓ Facebook Invitation Sent' : 'Invite from Facebook'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.instagramButton, invitedIg && styles.invitedButton]}
            activeOpacity={0.88}
            onPress={handleInviteIg}
          >
            <Ionicons
              name="logo-instagram"
              size={22}
              color={invitedIg ? '#ffffff' : '#E1306C'}
            />
            <Text style={[styles.buttonText, invitedIg && styles.invitedButtonText]}>
              {invitedIg ? '✓ Instagram Invitation Sent' : 'Invite from Instagram'}
            </Text>
          </TouchableOpacity>
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
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  circleContainer: {
    width: '100%',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  outerRing: {
    position: 'absolute',
    width: 270,
    height: 270,
    borderRadius: 135,
    borderWidth: 1.5,
    borderColor: VERY_LIGHT_PINK,
  },
  middleRing: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 1.5,
    borderColor: LIGHT_PINK,
  },
  profilesWrapper: {
    position: 'relative',
    width: 270,
    height: 270,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCircle: {
    borderRadius: 9999,
    overflow: 'hidden',
    backgroundColor: LIGHT_PINK,
    position: 'absolute',
    borderWidth: 2.5,
    borderColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  posCenter: {
    top: '50%',
    left: '50%',
    marginTop: -38,
    marginLeft: -38,
    borderColor: PINK,
    borderWidth: 3,
  },
  posTopLeft: {
    top: 10,
    left: 15,
  },
  posTopRight: {
    top: 5,
    right: 20,
  },
  posBottomLeft: {
    bottom: 15,
    left: 20,
  },
  posBottomRight: {
    bottom: 10,
    right: 15,
  },
  posLeft: {
    top: '50%',
    left: 0,
    marginTop: -22,
  },
  posRight: {
    top: '50%',
    right: 0,
    marginTop: -23,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 28,
    paddingHorizontal: 12,
  },
  mainText: {
    color: BLACK,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
  },
  mainTextHighlight: {
    color: PINK,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  subText: {
    color: GRAY,
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 4,
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
    borderRadius: 14,
    marginBottom: 14,
    gap: 10,
    elevation: 2,
    shadowColor: '#1877F2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    borderRadius: 14,
    marginBottom: 16,
    gap: 10,
    elevation: 2,
    shadowColor: '#E1306C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  invitedButton: {
    backgroundColor: PINK,
    borderColor: PINK,
  },
  buttonText: {
    color: BLACK,
    fontSize: 15,
    fontWeight: '700',
  },
  invitedButtonText: {
    color: '#ffffff',
  },
});

export default FriendsScreen;
