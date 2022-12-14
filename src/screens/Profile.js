import React from 'react';
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

const ProfileScreen = ({ navigation, route }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[backgroundStyle, styles.sectionContainer]}>
      <Header title="Trang cá nhân">
        Xin chào {route.params.user.username}. Bạn có thể thay đổi thông tin cá nhân của bạn ở đây!
        Mẩt khẩu {route.params.user.password}
      </Header>
      <View style={ styles.marginTop }>
        <Text>
          This is 's profile
        </Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  marginTop: {
    marginTop: 15,
  },
});

export default ProfileScreen;