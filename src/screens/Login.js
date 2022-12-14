import React, { useState, useReducer, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';
import { reducer } from '../auth/reducer';
import { DemoContext} from '../../App/';
import {
  Colors,
} from '../config';

// Declare components
const Header = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  )
}
// end components

const LoginScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const signIn = (user) => {
    dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const {state, dispatch} = useContext(DemoContext);
  return (
    <View
      contentInsetAdjustmentBehavior="automatic"
      style={[ backgroundStyle, styles.container ]}>
      <View style={[ styles.marginTop, styles.form, ]}>
        <Text style={[ styles.textHeader ]}>
          ĐĂNG NHẬP
        </Text>
        <Text style={[ styles.textUsername ]}>
          Tài khoản
        </Text>
        <TextInput
          style={[ styles.inputUsername ]}
          placeholder="Email hoặc số điện thoại"
          onChangeText={
            textUsername => setUser(user => ({...user, username: textUsername}))
          }
        />
        <Text style={[ styles.textPassword ]}>
          Mật khẩu
        </Text>
        <TextInput
          style={[ styles.inputPassword ]}
          secureTextEntry={true}
          placeholder="Nhập mật khẩu"
          onChangeText={
            textPassword => setUser(user => ({...user, password: textPassword}))
          }
        />
        <Text style={[ styles.textResetPassword ]} onPress={() => signIn(user)}>
          Quên mật khẩu
        </Text>
        <TouchableOpacity style={[ styles.touchLogin ]}>
          <Button
            title="Đăng nhập"
            onPress={() => signIn(user)}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    minHeight: 200,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  marginTop: {
    marginTop: 15,
  },
  inputUsername: {
    marginTop: 5,
    borderBottomWidth: 0.5,
    borderRadius: 3,
    borderColor: '#d3d3d3',
    height: 40,
  },
  inputPassword: {
    marginTop: 5,
    borderBottomWidth: 0.5,
    borderColor: '#d3d3d3',
    borderRadius: 3,
    height: 40,
  },
  textPassword: {
    marginTop: 13,
    fontSize: 15,
  },
  textUsername: {
    fontSize: 15,
  },
  textHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  btnLogin: {
    color: Colors.white,
  },
  touchLogin: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#ffa500',
    padding: 5,
    borderColor: '#ffa500',
  },
  textResetPassword: {
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center',
    color: '#e79908',
  },
  form: {
    padding: 25,
  },
});

export default LoginScreen;