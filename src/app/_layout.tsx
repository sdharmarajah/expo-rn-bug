/* eslint-disable react/react-in-jsx-scope */
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useNavigationContainerRef } from 'expo-router';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APIProvider } from '@/api';
export { ErrorBoundary } from 'expo-router';
// import '../../global.css';
import { useEffect, useState } from 'react';

import FlashMessage from 'react-native-flash-message';
import CustomSplashScreen from '@/components/SplashScreen';

export const unstable_settings = {
  initialRouteName: '(app)',
};

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1500);
  }, []);

  if (splash) {
    return <CustomSplashScreen />;
  }

  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  let [fontsLoaded] = useFonts({
    'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
    'Arial-Bold': require('../../assets/fonts/Arial-Bold.ttf'),
    'Arial-Light': require('../../assets/fonts/Arial-Light.ttf'),
    'Arial-Regular': require('../../assets/fonts/Arial.ttf'),
    'Arial-ExtraBold': require('../../assets/fonts/Arial-ExtraBold.ttf'),
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider
        value={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: '#394F5F',
            background: '#fff',
          },
        }}
      >
        <APIProvider>
          <BottomSheetModalProvider>
            {children}
            <FlashMessage position="top" />
          </BottomSheetModalProvider>
        </APIProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
});
