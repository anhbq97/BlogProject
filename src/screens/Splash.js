import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.paddingCenter}>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  paddingCenter: {
    padding: 30,
  }
});

export default SplashScreen;