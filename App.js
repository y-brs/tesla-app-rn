import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CarItem } from './components/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
  },
})
