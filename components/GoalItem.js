import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <View style={styles.goalItems}>

      <Text style={styles.goalText}>
        {itemData.item.text}
      </Text>

      <TouchableOpacity onPress={() => onDelete(itemData.item.key)} style={styles.deleteIcon}>
        <Icon name="delete" style={styles.deleteIconContent} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  goalItems: {
    backgroundColor: 'pink',
    borderColor: '#355C7D',
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 8, // Add left margin for indentation
  },
  deleteIcon: {
    padding: 8,
  },
  deleteIconContent: {
    color: 'blue',
    fontSize: 24,
  },
});

export default GoalItem;