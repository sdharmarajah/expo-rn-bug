
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function SplashScreen() {
  return (
    <LinearGradient colors={['#FEDE14', '#F37501']} style={styles.container}>
      <Image source={require('../../assets/splash.png')} style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.powered_by}>Powered by</Text>
      <Image source={require('../../assets/powered_by.png')} style={styles.powered_by_img}
        resizeMode='contain'
      />

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
    width: '100%',
    height: '100%',
  },
  powered_by: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Arial-Bold',
    marginTop: 'auto',
    marginBottom: 10,
  },
  powered_by_img: {
    width: 67,
    height: 63,
    marginBottom: 50,
  },
});