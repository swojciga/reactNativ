import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export interface AppInput {
    onAddGoal: any;
} 

const GoalInput = (props: AppInput) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const golaInputHandeler = (enteredText: string) => {
        setEnteredGoal(enteredText)
    }

    return ( 
        <View style={styles.inputContainer}>
            <TextInput  
                placeholder="Course Goal" 
                style={styles.input}
                onChangeText={golaInputHandeler} 
                value={enteredGoal}
            />  
            <Button 
                title="ADD" 
                onPress={props.onAddGoal.bind(this, enteredGoal)}
            />
      </View>
    )
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
    }
 })

export default GoalInput;