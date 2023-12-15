import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoal.trim() === '') {
      // Don't add empty goals
      return;
    }
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What goal do you have in mind?"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={addGoalHandler}
        style={({ pressed }) => [
          styles.addButton,
          {
            backgroundColor: pressed || isPressed ? '#4FC3F7' : '#03A9FA',
          },
        ]}
      >
        <Text style={styles.addButtonText}>Add Goal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#FFF', // Change the border color to white
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#E1F5FE',
    marginBottom: 12,
  },
  textInput: {
    flex: 1,
    padding: 13,
  },
  addButton: {
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoalInput;