/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {ReactNode} from 'react';
import {useRef} from 'react';
import {
  Text,
  View,
  Animated,
  Easing,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import CustomIcon from './CustomIcon';
import {colors, fontSize} from './constant';

export const Accordion = ({
  title,
  content,
  px = 10,
  py = 6,
  bgC = colors.lightGray,
  borderRadius = 6,
  gap = 10,
  titleColor = colors.black,
  titleFontSize = fontSize.medium,
  titleFontWeight = '600',
  contentBgC = colors.white,
  contentPx = 10,
  contentPy = 6,
}: {
  title: string;
  content: ReactNode;
  px?: number;
  py?: number;
  bgC?: string;
  borderRadius?: number;
  gap?: number;
  titleColor?: string;
  titleFontSize?: number;
  titleFontWeight?: string;
  contentBgC?: string;
  contentPx?: number;
  contentPy?: number;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const rotationValue = useRef(new Animated.Value(0)).current;

  const onAccordionToggle = () => {
    setIsOpen(prev => !prev);
    Animated.timing(rotationValue, {
      toValue: isOpen ? 0 : 90,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
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
            borderRadius: borderRadius,
            paddingHorizontal: px,
            paddingVertical: py,
            backgroundColor: bgC,
            borderBottomLeftRadius: isOpen ? 0 : borderRadius,
            borderBottomRightRadius: isOpen ? 0 : borderRadius,
          },
        ]}
        onPress={() => {
          onAccordionToggle();
        }}>
        <View style={[styles.flexRow, {gap: gap}]}>
          <Animated.View
            style={{
              transform: [{rotate: interpolatedRotateAnimation}],
            }}>
            <CustomIcon />
          </Animated.View>
          <Text
            style={[
              styles.title,
              {
                color: titleColor,
                fontSize: titleFontSize,
                fontWeight: titleFontWeight,
              },
            ]}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
      {isOpen && (
        <View
          style={[
            styles.content,
            {
              backgroundColor: contentBgC,
              paddingHorizontal: contentPx,
              paddingVertical: contentPy,
            },
          ]}>
          {content}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {},
  content: {},
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
