/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {ReactNode} from 'react';

import {useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';
import CustomIcon from './CustomIcon';

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
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          // justifyContent: 'center',
          padding: 0,
        }}
        onPress={() => {
          onAccordionToggle();
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 10,
          }}>
          <Animated.View
            style={{
              transform: [{rotate: interpolatedRotateAnimation}],
            }}>
            <CustomIcon />
          </Animated.View>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
      {isOpen && <View>{content}</View>}
    </View>
  );
};
