import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
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
import { white } from 'color-name';

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
        <ImageBackground
          source={require('./assets/wood.jpg')}
          resizeMode='cover'
          style={styles.imgBackground}
        > 
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.button_one, { backgroundColor: NoteOne }]}
              onPress={() => this.handlePlaySound('one')}
            >
              <View style={styles.button_xylo_left}></View>
              <View style={styles.button_xylo_right}></View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.button_two, { backgroundColor: NoteTwo }]}
              onPress={() => this.handlePlaySound('two')}
            >
              <View style={[styles.button_xylo_left, {marginRight: 10}]}></View>
              <View style={[styles.button_xylo_right, {marginLeft: 10}]}></View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.button_three, { backgroundColor: NoteThree }]}
              onPress={() => this.handlePlaySound('three')}
            >
              <View style={[styles.button_xylo_left, {marginRight: 15}]}></View>
              <View style={[styles.button_xylo_right, {marginLeft: 15}]}></View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.button_four, { backgroundColor: NoteFour }]}
              onPress={() => this.handlePlaySound('four')}
            >
              <View style={[styles.button_xylo_left, {marginRight: 22}]}></View>
              <View style={[styles.button_xylo_right, {marginLeft: 22}]}></View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.button_five, { backgroundColor: NoteFive }]}
              onPress={() => this.handlePlaySound('five')}
            >
              <View style={[styles.button_xylo_left, {marginRight: 29}]}></View>
              <View style={[styles.button_xylo_right, {marginLeft: 29}]}></View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.button_six, { backgroundColor: NoteSix }]}
              onPress={() => this.handlePlaySound('six')}
            >
              <View style={[styles.button_xylo_left, {marginRight: 37}]}></View>
              <View style={[styles.button_xylo_right, {marginLeft: 37}]}></View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.button_seven, { backgroundColor: NoteSeven }]}
              onPress={() => this.handlePlaySound('seven')}
            >
              <View style={[styles.button_xylo_left, {marginRight: 45}]}></View>
              <View style={[styles.button_xylo_right, {marginLeft: 45}]}></View>
            </TouchableOpacity>
          </View>

          <View style={styles.wood_lines_container}>
            <View style={styles.wood_line_one}></View>
            <View style={styles.wood_line_two}></View>
          </View>

        </ImageBackground>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    flex: 1 
  },
  buttonContainer: {
    width: 250,
    alignItems: 'center',
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 2.21,
    elevation: 6,
    borderRadius: 1,
  },
  button_xylo_left: {
    backgroundColor: 'white',
    height: 15,
    width: 15,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  button_xylo_right: {
    backgroundColor: 'white',
    height: 15,
    width: 15,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  button_one: {
    width: 250,
    borderBottomWidth: 2,
    borderBottomColor: '#862727',
    borderLeftWidth: 2,
    borderLeftColor: '#862727',
  },
  button_two: {
    width: 235,
    borderBottomWidth: 2,
    borderBottomColor: '#956317',
    borderLeftWidth: 2,
    borderLeftColor: '#956317',
  },
  button_three: {
    width: 220,
    borderBottomWidth: 2,
    borderBottomColor: '#75750a',
    borderLeftWidth: 2,
    borderLeftColor: '#75750a',
  },
  button_four: {
    width: 205,
    borderBottomWidth: 2,
    borderBottomColor: '#3b5637',
    borderLeftWidth: 2,
    borderLeftColor: '#3b5637',
  },
  button_five: {
    width: 190,
    borderBottomWidth: 2,
    borderBottomColor: '#127676',
    borderLeftWidth: 2,
    borderLeftColor: '#127676',
  },
  button_six: {
    width: 175,
    borderBottomWidth: 2,
    borderBottomColor: '#101644',
    borderLeftWidth: 2,
    borderLeftColor: '#101644',
  },
  button_seven: {
    width: 160,
    borderBottomWidth: 2,
    borderBottomColor: '#601a86',
    borderLeftWidth: 2,
    borderLeftColor: '#601a86',
  },
  wood_lines_container: {
    flexDirection: 'row',
    position: 'absolute',
  },
  wood_line_one: {
    backgroundColor: '#d1af88',
    height: 450,
    width: 25,
    marginRight: 100,
    borderRadius: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: '#ae9374',
    borderLeftWidth: 1.5,
    borderLeftColor: '#ae9374',
  },
  wood_line_two: {
    backgroundColor: '#d1af88',
    height: 450,
    width: 25,
    borderRadius: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: '#ae9374',
    borderLeftWidth: 1.5,
    borderLeftColor: '#ae9374',
  },
});

export default App;