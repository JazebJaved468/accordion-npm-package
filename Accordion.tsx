/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {ReactNode} from 'react';

import {useRef} from 'react';
import {Animated, Easing, StyleSheet, TouchableHighlight} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomIcon from './CustomIcon';
import {colors, fontSize} from './constant';

export const Accordion = ({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const rotationValue = useRef(new Animated.Value(0)).current;

  const onAccordionToggle = () => {
    setIsOpen(prev => !prev);
    Animated.timing(rotationValue, {
      toValue: isOpen ? 0 : 90,
      duration: 300, // You can adjust the duration as per your preference
      easing: Easing.linear,
      useNativeDriver: false, // Set to true if using native driver is preferred
    }).start();
  };

  const interpolatedRotateAnimation = rotationValue.interpolate({
    inputRange: [0, 90],
    outputRange: ['0deg', '90deg'],
  });
  return (
    <View>
      <TouchableHighlight
        underlayColor={colors.lightGray}
        style={[
          styles.container,
          {
            borderBottomLeftRadius: isOpen ? 0 : 6,
            borderBottomRightRadius: isOpen ? 0 : 6,
          },
        ]}
        onPress={() => {
          onAccordionToggle();
        }}>
        <View style={styles.flexRow}>
          <Animated.View
            style={{
              transform: [{rotate: interpolatedRotateAnimation}],
            }}>
            <CustomIcon />
          </Animated.View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableHighlight>
      {isOpen && <View style={styles.content}>{content}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },

  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
