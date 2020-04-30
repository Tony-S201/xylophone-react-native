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

export const xyloSounds = {
  one: require('./assets/note1.wav'),
  two: require('./assets/note2.wav'),
  three: require('./assets/note3.wav'),
  four: require('./assets/note4.wav'),
  five: require('./assets/note5.wav'),
  six: require('./assets/note6.wav'),
  seven: require('./assets/note7.wav')
}

class App extends React.Component {

  handlePlaySound = async note => {
    const soundObject = new Audio.Sound()
  
    try {
      let source = xyloSounds[note]
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: NoteOne }]}
            onPress={() => this.handlePlaySound('one')}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: NoteTwo }]}
            onPress={() => this.handlePlaySound('two')}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: NoteThree }]}
            onPress={() => this.handlePlaySound('three')}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: NoteFour }]}
            onPress={() => this.handlePlaySound('four')}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: NoteFive }]}
            onPress={() => this.handlePlaySound('five')}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: NoteSix }]}
            onPress={() => this.handlePlaySound('six')}
          >
            <Text style={styles.buttonText}></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: NoteSeven }]}
            onPress={() => this.handlePlaySound('seven')}
          >
            <Text style={styles.buttonText}></Text>
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