import { useState, useEffect, useRef } from 'react';
import { Text, View, Animated, TouchableOpacity, StyleSheet, Appearance, useColorScheme } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { themes, defaultTheme } from '../constants/theme';

export default function Index() {
  const router = useRouter();
  const systemColorScheme = useColorScheme(); // 'light' or 'dark'
  const [theme, setTheme] = useState(systemColorScheme || defaultTheme);
  const scaleAnim = useRef(new Animated.Value(0.9)).current; // Animation starting scale

  // Load theme from AsyncStorage or set default
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setTheme(savedTheme);
        } else {
          await AsyncStorage.setItem('theme', systemColorScheme || defaultTheme);
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    };
    loadTheme();
  }, [systemColorScheme]);

  // Logo animation
  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const colors = themes[theme];
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Logo */}
      <Animated.Image
        source={
          theme === 'light'
            ? require('../assets/images/logo-light.png')
            : require('../assets/images/logo-dark.png')
        }
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
        resizeMode="contain"
      />

      {/* Get Started Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => router.push('/home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12, // Softer corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});