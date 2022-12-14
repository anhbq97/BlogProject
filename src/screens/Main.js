import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Colors } from '../config';

const MainScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getBlogFromApi = async () => {
    try {
      const response = await fetch(
        'http://poorclu.site/api/post/list?page=1'
      );
      const json = await response.json();
      setData(json.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      console.debug(isLoading);
      setLoading(false);
      console.debug(isLoading);
    }
  };

  useEffect(() => {
    getBlogFromApi();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          showsVerticalScrollIndicator={true}
          data={data}
          keyExtractor={({ post_id }, index) => post_id}
          renderItem={({ item }) => (
            <View style={[ styles.post ]}>
              <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: '100%', height: 400}} />
              <Text>{item.title}</Text>
              <Text>Tác giả: {item.user_name}</Text>
            </View>
          )}
        />
      )}
      <Button
        title="Đăng nhập"
        onPress={() =>
          navigation.navigate('Login', { name: 'Jane' })
        }
      />
      <Button
        title="Đăng ký"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
      <Button
        title="Blog"
        onPress={() =>
          navigation.navigate('Blog', { name: 'Blog' })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    borderWidth: 1,
    borderRadius: 1,
    marginBottom: 5,
    shadow: 2,
    borderColor: Colors.black,
    padding: 10,
  }
});

export default MainScreen;