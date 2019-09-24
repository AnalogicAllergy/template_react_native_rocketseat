import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 30,

    color: '#9157c1',
  },
});

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Projeto Standard React Native</Text>
        </View>
      </View>
    </>
  );
};

export default App;
