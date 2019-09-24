import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import './config/ReactotronConfig';

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
console.tron.log(`It's alive`);

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
