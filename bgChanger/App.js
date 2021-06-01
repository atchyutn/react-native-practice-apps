import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const App = () => {
  return(
    <>
      <View style={[{backgroundColor: '#000000'}, styles.container]}>
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