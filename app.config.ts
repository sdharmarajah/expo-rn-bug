import { ClientEnv, Env } from './env';
/* eslint-disable max-lines-per-function */
import type { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  scheme: Env.SCHEME,
  slug: Env.SLUG,
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    backgroundColor: '#F37501',
  },
  updates: {
    url: 'https://u.expo.dev/16b4e4dd-3870-4751-ab4c-ee8e12780ca4',
    fallbackToCacheTimeout: 0,
  },
  runtimeVersion: '1.2.0',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    googleServicesFile: './GoogleService-Info.plist',
    bundleIdentifier: Env.BUNDLE_ID,
    buildNumber: '14',
    infoPlist: {
      NSUserTrackingUsageDescription:
        'This identifier is used to deliver personalized ads and improve your experience.',
    },
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    versionCode: 25, // set version code here
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#F37501',
    },
    package: 'com.atlas.craftbuddies2',
    googleServicesFile: './google-services.json',
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: [
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/Inter.ttf',
          './assets/fonts/Poppins-Black.ttf',
          './assets/fonts/Poppins-Bold.ttf',
          './assets/fonts/Poppins-ExtraBold.ttf',
          './assets/fonts/Poppins-ExtraLight.ttf',
          './assets/fonts/Poppins-Light.ttf',
          './assets/fonts/Poppins-Medium.ttf',
          './assets/fonts/Poppins-Regular.ttf',
          './assets/fonts/Poppins-SemiBold.ttf',
          './assets/fonts/Poppins-Thin.ttf',
          './assets/fonts/Arial-Bold.ttf',
          './assets/fonts/Arial.ttf',
          './assets/fonts/Arial-Light.ttf',
          './assets/fonts/Arial-ExtraBold.ttf',
        ],
      },
    ],
    'expo-localization',
    'expo-tracking-transparency',
    'expo-router',
    [
      "expo-video",
      {
        "supportsBackgroundPlayback": true,
        "supportsPictureInPicture": true
      }
    ],
    [
      'expo-build-properties',
      {
        android: {
          kotlinVersion: '1.7.22', // this is for softinput package
          usesCleartextTraffic: true, //allow http
        },
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
    [
      'app-icon-badge',
      {
        enabled: Env.APP_ENV !== 'main' && Env.APP_ENV !== 'development',
        badges: [
          {
            text: Env.APP_ENV,
            type: 'banner',
            color: 'white',
          },
          {
            text: Env.VERSION.toString(),
            type: 'ribbon',
            color: 'white',
          },
        ],
      },
    ],
    '@react-native-firebase/app',
    [
      'react-native-fbsdk-next',
      {
        appID: '2059651564454379',
        clientToken: 'e14d5f50d16402cd9fbad90fa37852af',
        displayName: 'Craft Buddies',
        scheme: 'fb92059651564454379',
        advertiserIDCollectionEnabled: false,
        autoLogAppEventsEnabled: true,
        isAutoInitEnabled: true,
        iosUserTrackingPermission:
          'This identifier will be used to deliver personalized ads to you.',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission:
          'Craft Buddies needs access to your photos to take upload a picture of your drawing',
        cameraPermission:
          'Craft Buddies needs access to your Camera to take a picture of your drawing',
      },
    ],
    'expo-tracking-transparency',
  ],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  },
});
