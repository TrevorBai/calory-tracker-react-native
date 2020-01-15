import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'

const App = () => {
  const [enteredCalory, setEnteredCalory] = useState('')
  const [caloryGoals, setCaloryGoals] = useState([])

  const caloryInputHandler = enteredText => {
    setEnteredCalory(enteredText)
  }

  const addCaloryHandler = () => {
    setCaloryGoals(currentCalories => [...caloryGoals, enteredCalory])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Calory Goal"
          style={styles.input}
          onChangeText={caloryInputHandler}
          value={enteredCalory}
        />
        <Button title="ADD" onPress={addCaloryHandler} />
      </View>
      <ScrollView>
        {caloryGoals.map(cur => <View key={cur} style={styles.listItem}>
          <Text >Calory: {cur}</Text>
        </View>
        )}
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})
