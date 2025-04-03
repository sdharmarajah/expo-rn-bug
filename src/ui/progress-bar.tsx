import React, { forwardRef, useImperativeHandle } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  initialProgress?: number;
  style?: ViewStyle | ViewStyle[];
  color?: string;
  height?: number;
  bgColor?: string;
};

export type ProgressBarRef = {
  setProgress: (value: number) => void;
};

export const ProgressBar = forwardRef<ProgressBarRef, Props>(
  (
    {
      initialProgress = 0,
      style,
      color = '#FF6900',
      height = 16,
      bgColor = '#D9D9D9',
    },
    ref
  ) => {
    const progress = useSharedValue<number>(initialProgress ?? 0);
    useImperativeHandle(
      ref,
      () => ({
        setProgress: (value: number) => {
          progress.value = withTiming(value, {
            duration: 1000,
            easing: Easing.inOut(Easing.quad),
          });
        },
      }),
      [progress]
    );

    const animatedStyle = useAnimatedStyle(() => ({
      width: `${progress.value}%`,
      backgroundColor: color,
      height,
      borderRadius: 35,
    }));

    return (
      <View
        style={[
          styles.container,
          style,
          {
            backgroundColor: bgColor,
          },
        ]}
      >
        <Animated.View style={animatedStyle} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    borderRadius: 35,
  },
});
