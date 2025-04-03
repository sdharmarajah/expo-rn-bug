import { ResizeMode, Audio } from 'expo-av';
import { useVideoPlayer, VideoView } from "expo-video";
import * as FileSystem from 'expo-file-system';
import { router, useFocusEffect } from 'expo-router';
import * as Sharing from 'expo-sharing';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  BackHandler,
  Platform,
  Pressable,
  View,
  Button,
} from 'react-native';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');
const isTablet = width >= 700;

export default function VideoPage() {
  const video = useRef(null as any);
  const sound = useRef(new Audio.Sound()); // ✅ added
  const video_url =
      "https://firebasestorage.googleapis.com/v0/b/cudlee-c6d3d.appspot.com/o/animation.mp4?alt=media&token=ec7f05e0-27e8-4c15-b760-b10ae2f50ad4";
  const player = useVideoPlayer(video_url, (player) => {
    player.loop = true;
    player.play();
  });
  const { t } = useTranslation();
  const [isVideoReady, setIsVideoReady] = useState(false);

  const downloadVideo = async () => {
    const fileUri =
      FileSystem.cacheDirectory +
      'video_' +
      Math.floor(Math.random() * 1000001) +
      '.mp4';
    try {
      const { uri } = await FileSystem.downloadAsync(video_url ?? '', fileUri);
      return uri;
    } catch (error) {
      console.error('Error downloading video:', error);
      throw error;
    }
  };

  const shareVideo = async () => {
    try {
      const videoUri = await downloadVideo();
      if (!videoUri) {
        alert('Failed to download the video.');
        return;
      }

      if (!(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
      }

      await Sharing.shareAsync(videoUri);
    } catch (error) {
      alert('An error occurred while preparing the video for sharing.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        router.replace('/(app)/(index)/');
        return true; // Prevent default back action
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );
      return () => {
        if (video.current) {
          video.current.pauseAsync();
        }
        sound.current?.unloadAsync(); // ✅ clean up sound
        backHandler.remove();
      };
    }, [])
  );

  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  const handleRestart = () => {
    router.push('/(app)/(index)/');
  };

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  return (
    <View style={styles.container}>
      {/* Back Button for iOS when video is ready */}

      <View style={styles.question_container}>
        <Text style={styles.question}>{t('video.title')}</Text>
        <Text style={styles.question}>{t('video.subtitle')}</Text>
      </View>

      <VideoView
        ref={video}
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />

      <View>
        <Pressable style={styles.share_btn} onPress={shareVideo}>
          <Text>Share</Text>
        </Pressable>
      </View>

      <Pressable onPress={handleRestart} style={styles.next_btn}>
        <Text>Restart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: isTablet ? 120 : 55,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  question_container: {
    marginTop: isTablet ? 20 : 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: isTablet ? 55 : 31,
    color: '#FF6900',
    letterSpacing: 0.5,
    textAlign: 'center',
    fontFamily: 'Arial-Bold',
    marginBottom: isTablet ? 40 : 10,
  },
  video: {
    marginVertical: isTablet ? 40 : 20,
    width: '100%',
    height: isTablet ? 600 : 400,
  },
  share_btn: {
    width: '100%',
    borderRadius: 12,
    borderBottomWidth: 0,
    height: isTablet ? 70 : 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6900',
    marginTop: 'auto',
  },
  next_btn: {
    width: '100%',
    backgroundColor: '#FFC805',
    borderRadius: 12,
    borderBottomWidth: 0,
    height: isTablet ? 70 : 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  btn_text: {
    fontFamily: 'Arial-Bold',
    fontSize: isTablet ? 25 : 16,
  },
  back_button: {
    position: 'absolute',
    top: 60,
    left: 10,
    zIndex: 10,
    padding: 10,
    width: 50,
    height: 50,
  },
});
