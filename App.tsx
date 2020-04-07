import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
 
export default function App() {

  const [courseGoals, setCourseGoals ] = useState([]) as any[];

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((courseGoal: string[]) => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]); 
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data = {courseGoals}
        renderItem = { itemData => (
          <GoalItem
            title={itemData.item.value}
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