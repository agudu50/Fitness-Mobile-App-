import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PINK = '#ff6b81';
const BLACK = '#1a1a1a';
const GRAY = '#8e8e93';

const WorkoutCard = ({ image, title, duration, calories, onPress }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    setIsFavourite((prev) => !prev);
  };

  const imageSource = typeof image === 'string' ? { uri: image } : image;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="cover"
        />
        <Pressable
          style={styles.favouriteButton}
          onPress={toggleFavourite}
          hitSlop={8}
        >
          <Ionicons
            name={isFavourite ? 'heart' : 'heart-outline'}
            size={20}
            color={isFavourite ? PINK : '#8e8e93'}
          />
        </Pressable>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.metaRow}>
          <View style={styles.metaBadge}>
            <Ionicons name="time-outline" size={14} color={GRAY} />
            <Text style={styles.metaText}>{duration}</Text>
          </View>
          <View style={styles.metaBadge}>
            <Ionicons name="flame-outline" size={14} color={PINK} />
            <Text style={styles.metaText}>{calories} kcal</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f0f0f5',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  imageContainer: {
    width: '100%',
    height: 160,
    backgroundColor: '#f1f2f6',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favouriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  metaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: GRAY,
    fontSize: 13,
    fontWeight: '500',
  },
});

export default WorkoutCard;
