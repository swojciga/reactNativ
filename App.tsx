import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
 
export interface Goal {
  value: string,
  id: string
}

export default function App() {

  const [courseGoals, setCourseGoals ] = useState([]) as any[];

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((currentGoals: Goal[]) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]); 
  }

  const removeGoalHandler = (goalId: string) => {
    setCourseGoals( (currentGoals: Goal[]) => {
      return currentGoals.filter( (goal: Goal) => goal.id !== goalId )
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data = {courseGoals}
        renderItem = { itemData => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          ></GoalItem>
        )}
      />
    </View> 
  );
}

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
      paddingTop: 10
    },
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1

    }
 })