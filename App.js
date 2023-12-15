import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, Button, Image, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Icon from 'react-native-vector-icons/AntDesign';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState(null);

  function addGoalHandler(goalTitle) {
    if (courseGoals.length < 5) {
      const newGoal = {
        text: goalTitle,
        key: Math.random().toString(),
      };

      setCourseGoals((currentCourseGoals) => [...currentCourseGoals, newGoal]);
    } else {
      setIsModalVisible(true);
    }
  }

  function closeModalHandler() {
    setIsModalVisible(false);
  }

  function deleteGoalHandler(goalKey) {
    const goalToDelete = courseGoals.find((goal) => goal.key === goalKey);
    setGoalToDelete(goalToDelete);
    setIsModalVisible(true);
  }

  function confirmDeleteGoal() {
    if (goalToDelete) {
      setCourseGoals((currentCourseGoals) =>
        currentCourseGoals.filter((goal) => goal.key !== goalToDelete.key)
      );
    }
    setGoalToDelete(null); // Reset goalToDelete
    setIsModalVisible(false); // Close the modal
  }

  return (
    <ImageBackground
    source={require('./assets/chillbackground.jpg')} 
    style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>

        <Image
          source={require('./assets/tecdigger.png')}
          style={styles.headerImage}
        />

         <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{"\n"}Jullian Santos' Workplace</Text>
        </View>   


        <View style = {styles.hContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)} 
                              style={styles.modalButton}>
            <Icon name="home" style={styles.homeIconContent} />
            <Text style={styles.modalButtonText}>Welcome!</Text>
          </TouchableOpacity> 
        </View>


        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
          <View style={styles.modalContainer}>  
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Welcome to the Application!</Text>
              <Button title = 'dismiss'
                  onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>


        <GoalInput onAddGoal={addGoalHandler} />

        <View style={styles.goalContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{"\n"}LIST OF GOALS</Text>
          </View>

          <View style={styles.goalListContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => (
                <GoalItem itemData={itemData} onDelete={deleteGoalHandler} />
              )}
            />
          </View>



        </View>

        <Modal 
          visible={isModalVisible} 
          transparent= {true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
          >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              {
              goalToDelete ? 
              (
                <Text style={styles.modalText}>You deleted "{goalToDelete.text}."</Text>
              ) : 

              (
                <Text style={styles.modalText}>Too much burden may overwhelm you!</Text>
              )
              }
              <Button title="OK" onPress={confirmDeleteGoal} />
            </View>
          </View>
        </Modal>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 1,
  },
  homeContainer: {
    alignItems: 'center',
    marginBottom: 1
  },
    hContainer: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    marginTop: -5,
    position: 'absolute', // add if dont work with above
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  goalContainer: {
    flex: 1,
    height: 1,
  },
  goalListContainer: {
    flex: 1,
  },
  modalContainer: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: 'pink',
    padding: 1,
    margin: 20,
    borderRadius: 2,
    height: 50,
    width: 100,
  },

  modalView: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalButtonText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  homeIconContent: {
    color: 'blue',
    fontSize: 18,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' or 'stretch' or 'center'
    justifyContent: 'center',
  },
});
