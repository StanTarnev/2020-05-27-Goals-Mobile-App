import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  constructor() {
    super();

    this.state = {
      goalInput = '',
      goals = [
        { id: 0, title: 'Duolingo', done: false },
        { id: 1, title: 'Read German', done: false }
      ]
    }
  }

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
