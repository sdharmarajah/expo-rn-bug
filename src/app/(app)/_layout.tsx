import { SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
export default function TabLayout() {
  const isAndroid = Platform.OS === 'android';

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (true) {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash]);
  const { t } = useTranslation();

  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: '#FF6900',
        tabBarStyle: isAndroid
          ? {
              height: 80,
              paddingBottom: 24,
              paddingTop: 16,
            }
          : {
              display: 'none',
            },
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: t('tabbar.home') || 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[styles.iconContainer, focused && styles.focused]}
            ></View>
          ),
          tabBarLabelStyle: {
            fontFamily: 'Arial-Bold',
            fontSize: 10,
            position: 'relative',
            bottom: 4,
          },
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -16.5,
  },
  focused: {
    borderTopWidth: 3,
    borderTopColor: '#FF6900',
    width: 40,
  },
});
