import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function CustomSplashScreen() {
  return (
    <LinearGradient style={styles.container} colors={['#FEDE14', '#F37501']}>
      <Text>Helle</Text>
      {/* <Image source={require('../../assets/splash.png')} style={styles.image} /> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
