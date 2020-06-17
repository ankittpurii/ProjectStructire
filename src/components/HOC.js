import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';
import LoadingComp from '../components/reuse/LoadingComp';
import config from '../utils/Config';

/**
 * HOC for including reusable UI logic
 */
const HOC = (ChildComponent, params) => {
  function InnerHOC(props) {
    props.navigation.setOptions({
      headerStyle: {
        backgroundColor: config.colors.THEME_COLOR,
      },
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerLeft: () => (
        <TouchableOpacity
          disabled={loadingStatus ? true : false}
          activeOpacity={1}
          style={{
            justifyContent: 'center',
            padding: 10,
          }}
          onPress={() => {}}>
          <Text>Back Icon</Text>
        </TouchableOpacity>
      ),
    });
    const loadingStatus = useSelector(
      (state) => state.LoadingReducer.loadingStatus,
    );
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: config.colors.BACKGROUND_COLOR,
        }}>
        <ChildComponent />
        {loadingStatus ? <LoadingComp /> : null}
      </SafeAreaView>
    );
  }
  return InnerHOC;
};
export default HOC;
