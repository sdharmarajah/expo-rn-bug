import { getApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDYY10k_3mMf-UHuuhbMnCSJc5uRikavm0',
  authDomain: 'craft-buddies.firebaseapp.com',
  databaseURL: 'https://craft-buddies.firebaseio.com',
  projectId: 'craft-buddies',
  storageBucket: 'craft-buddies.appspot.com',
  appId: '1:285408467389:android:c89c0cec4083e37b72dad4',
  //   measurementId: "G-measurement-id",
};

// Initialize Firebase if no other app has been initialized
const app = !getApps().length
  ? initializeApp(firebaseConfig, { automaticDataCollectionEnabled: true })
  : getApp();

export { app };
