/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  AsyncStorage
} from 'react-native';
import RealmModel from './App/RealmModel'

const Realm = require('realm');

export default class SampleTestProject extends Component {
  constructor (props) {
    super(props)
    this.state ={
      count: 0
    }
  }
  componentWillMount(){
    let count = RealmModel.getAll()
    console.log(count,"Count######@@@@@@")
    this.setState({count: count})
    // AsyncStorage.getItem('@increment:count').then((count) =>{
    //   var incCount = (count) ? parseInt(count) : 0
    //   this.setState({count: incCount})
    // })
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TouchableHighlight 
          style={styles.plusButtonView} 
          underlayColor={'green'}
          onPress={() => this.incrementCount()}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableHighlight>
        <Text>Count: {this.state.count}</Text>
      </View>
    );
  }
  incrementCount(){
    this.setState({count: (this.state.count)+1,})
    setTimeout(() => {
      console.log(this.state.count,"Count####@@@@*******")
      RealmModel.save(this.state.count)
    }, 5)  
    // setTimeout(() => {
    //   var count = this.state.count.toString()
    //   AsyncStorage.setItem('@increment:count', count)
    // }, 5)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  plusButtonView: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  plusButtonText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('SampleTestProject', () => SampleTestProject);
