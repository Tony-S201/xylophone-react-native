import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  NoteOne,
  NoteTwo,
  NoteThree,
  NoteFour,
  NoteFive,
  NoteSix,
  NoteSeven
} from './contants/Colors';
import { Audio } from 'expo-av';

class App extends React.Component {
  render () {
    const xyloSounds = {
      one: require('./assets/note1.wav'),
      two: require('./assets/note2.wav'),
      three: require('./assets/note3.wav'),
      four: require('./assets/note4.wav'),
      five: require('./assets/note5.wav'),
      six: require('./assets/note6.wav'),
      seven: require('./assets/note7.wav')
    }
    
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: NoteOne }]}
            onPress={() => this.handlePlaySound('one')}
          >
            <Text style={styles.buttonText}>Note 1</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonContainer: {
    flex: 1,
    width: 250,
  },
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }

});

export default App;