import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHome from './useHome';
import {Colors} from '../../helpers/colors';

const HomeScreen = () => {
  const {data, isLoading, isSuccess} = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {isLoading && <Text style={{textAlign: 'center'}}>Loading...</Text>}
        {isSuccess && (
          <View>
            <Text style={styles.title}>List Example Axios</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item}) => (
                <View style={styles.viewItem}>
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text style={styles.textBody}>{item.body}</Text>
                </View>
              )}
              style={styles.flatList}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
  },
  flatList: {margin: 10},
  title: {
    color: Colors.PurpleDarker,
    fontSize: 25,
    alignSelf: 'center',
  },
  viewItem: {
    backgroundColor: Colors.PurpleDarker,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  textTitle: {fontSize: 15, fontWeight: 'bold', color: Colors.White},
  textBody: {color: Colors.White, fontSize: 12, marginVertical: 2},
});

export default HomeScreen;
