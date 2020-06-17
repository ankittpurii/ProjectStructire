import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

/** Splash Screen of the Application */
const SplashScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerShown: false,
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'HomeScreen'}]});
    }, 500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Test Project</Text>
    </View>
  );
};

export default (SplashScreen);
