import React, { useState } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'
import CaloryItem from './components/CaloryItem'
import CaloryInput from './components/CaloryInput'

const App = () => {
  const [caloryGoals, setCaloryGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addCaloryHandler = (calory) => {
    setCaloryGoals(currentCalories => [...currentCalories, { key: Math.random().toString(), value: calory }])
  }

  const removeCaloryHandler = (caloryId) => {
    setCaloryGoals(currentCalories => currentCalories.filter(cur => cur.key !== caloryId))
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Calory" onPress={() => setIsAddMode(true)} />
      <CaloryInput
        visible={isAddMode}
        title="ADD"
        pressed={addCaloryHandler}
      />
      <FlatList
        data={caloryGoals}
        renderItem={itemData => <CaloryItem id={itemData.item.key} onDelete={removeCaloryHandler} title={itemData.item.value} />}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})
