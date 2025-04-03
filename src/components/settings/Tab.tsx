import React, { useCallback, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { ArrowRight } from '@/ui/icons';
import { Globe } from '@/ui/icons';
import { Logout } from '@/ui/icons/logout';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Trash } from '@/ui/icons/trash';
import { Tutorial } from '@/ui/icons/tutorial';
import { User } from '@/ui/icons/user';

export default function Tab({
  label,
  onClick,
  Icon,
}: {
  label: string;
  onClick: () => void;
  Icon?: any;
}) {
  const [clicked, setClicked] = useState(false);
  const Icons: { [key: string]: JSX.Element } = {
    globe: <Globe fill={clicked ? 'white' : '#FF6900'} />,
    tutorial: (
      <Tutorial
        fill={clicked ? 'white' : '#FF6900'}
        innerColor={clicked ? '#FF6900' : 'white'}
      />
    ),
    user: <User fill={clicked ? 'white' : '#FF6900'} />,
    signout: <Logout fill={clicked ? 'white' : '#FF6900'} />,
    trash: <Trash fill="white" stroke="#FF6900" />,
  };

  const triggerClick = useCallback(() => {
    setClicked(!clicked);
    setTimeout(() => {
      setClicked(false);
    }, 200);
  }, [clicked]);
  return (
    <TouchableOpacity
      style={[styles.tab, clicked && styles.clickedTab]}
      onPress={() => {
        onClick();
        triggerClick();
      }}
    >
      {Icon && Icons[Icon]}
      <Text style={[styles.label, clicked && { color: 'white' }]}>{label}</Text>
      <ArrowRight
        color={clicked ? 'white' : '#FF6900'}
        width={20}
        height={20}
        style={styles.right_arrow}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  tab: {
    padding: 10,
    borderWidth: 1,
    height: 60,
    borderColor: '#FF6900',
    borderRadius: 55,
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
    marginBottom: 29,
    flexDirection: 'row',
  },
  clickedTab: {
    backgroundColor: '#FF6900',
  },
  label: {
    fontSize: 18,
    color: '#FF6900',
    fontFamily: 'Arial-Bold',
    marginLeft: 20,
  },
  right_arrow: {
    marginLeft: 'auto',
  },
});
