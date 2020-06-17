import React from 'react';
import {View, Text} from 'react-native';
import HOC from '../HOC';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    title: 'Dashboard',
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HOC(HomeScreen);
