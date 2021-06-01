import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const App = () => {

  const [randomColor, setRandomColor] = useState('rgb(30, 30, 30)')
  
  return(
    <>
      <View style={[{backgroundColor: randomColor}, styles.container]}>
        <Text style={styles.text}>Change Background</Text>
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