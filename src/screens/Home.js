import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import { DemoContext} from '../../App/';

const HomeScreen = ({ navigation }) => {
  const signOut = () => {
    dispatch({ type: 'SIGN_OUT', token: null });
  }
  const {state, dispatch} = useContext(DemoContext);

  return (
    <View>
      <Text>Đã đăng nhập</Text>
      <Button
        title="Đăng xuất"
        onPress={() => signOut()}
      />
    </View>
  );
};

export default HomeScreen;