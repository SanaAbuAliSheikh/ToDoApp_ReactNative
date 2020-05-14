/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppNavigation from './Navigation/AppNavigation';

import Notes from './Components/Notes';
export default class App extends Component {
  state = {
    noteArray: [{note: 'Artificial Intelligence Assesement'}],
    noteText: '',
  };

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Notes
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>To Do App</Text>
        </View>

        <ScrollView style={styles.scrollViewContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.addNote.bind(this)}
            style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({noteText})}
            value={this.state.noteText}
            placeholder="Enter note here.."
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollViewContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#E91E63',
    elevation: 1,
    width: 90,
    height: 90,
    zIndex: 10,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -45,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#232123',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
});
