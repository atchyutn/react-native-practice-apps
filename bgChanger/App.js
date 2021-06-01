import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

const App = () => {

  const [randomColor, setRandomColor] = useState('rgb(30, 30, 30)')
  
  const changeBackground = () => {
    let color = 'rgb(' +
      Math.floor(Math.random() * 256) +
      ','+
      Math.floor(Math.random() * 256) +
      ','+
      Math.floor(Math.random() * 256) +
    ')';
    
    setRandomColor(color);
  }

  const resetBg = () => {
    setRandomColor('rgb(30, 30, 30)')
  }

  return(
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[{backgroundColor: randomColor}, styles.container]}>
        <TouchableOpacity onPress={changeBackground}>
          <Text style={styles.text}>Change Background</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBg}>
          <Text style={[styles.text, {marginTop:15, backgroundColor: 'red'}]}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    textTransform: 'uppercase',
    borderRadius: 15,
    backgroundColor: 'green'
  }
})

export default App;