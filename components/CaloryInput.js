import React, { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native'

const CaloryInput = props => {
  const [enteredCalory, setEnteredCalory] = useState('')

  const caloryInputHandler = enteredText => {
    setEnteredCalory(enteredText)
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Calory Goal"
          style={styles.input}
          onChangeText={caloryInputHandler}
          value={enteredCalory}
        />
        <Button title={props.title} onPress={() => props.pressed(enteredCalory)} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default CaloryInput