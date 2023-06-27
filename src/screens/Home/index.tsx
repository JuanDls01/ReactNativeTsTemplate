import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text style={styles.title}>Home screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  view: {
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 25,
  },
});

export default HomeScreen;
