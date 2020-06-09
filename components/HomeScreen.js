import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import InputBar from './InputBar';

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      goalInput: '',
      goals: [
        { id: 0, title: 'Duolingo', done: false },
        { id: 1, title: 'Read German', done: false }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}></View>

        <Header title="Goals" />

        <InputBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 36
  }
});
