import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native'

type Props = {}

const Demographics = (props: Props) => {
  const [gender, setGender] = useState('')
  const [showGenderPicker, setShowGenderPicker] = useState(false)
  const genderOptions = ['Female', 'Male', 'Non-binary', "I'd rather not say"]
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [heightFeet, setHeightFeet] = useState('')
  const [heightInches, setHeightInches] = useState('')

  const selectGender = (selectedGender: string) => {
    setGender(selectedGender)
    setShowGenderPicker(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s get to know you a little better!</Text>
      <Text style={styles.subtitle}>
        Answer the following prompts below to access your potential
      </Text>

      <TouchableOpacity
        style={styles.picker}
        onPress={() => setShowGenderPicker(true)}
      >
        <Text>{gender || 'Select Gender'}</Text>
      </TouchableOpacity>

      <Modal
        visible={showGenderPicker}
        transparent={true}
        animationType='slide'
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowGenderPicker(false)}
        >
          <View style={styles.modalContent}>
            <ScrollView>
              {genderOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.optionItem}
                  onPress={() => selectGender(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

      <TextInput
        style={styles.input}
        onChangeText={setAge}
        value={age}
        placeholder='Enter your age'
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder='Enter your weight'
        keyboardType='numeric'
      />

      <View style={styles.heightInputContainer}>
        <TextInput
          style={[styles.input, styles.heightInput]}
          onChangeText={setHeightFeet}
          value={heightFeet}
          placeholder='Feet'
          keyboardType='numeric'
        />
        <TextInput
          style={[styles.input, styles.heightInput]}
          onChangeText={setHeightInches}
          value={heightInches}
          placeholder='Inches'
          keyboardType='numeric'
        />
      </View>
    </View>
  )
}

export default Demographics

// Add styles for input and picker
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'DMSerifDisplay',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 20,
    fontFamily: 'Inter',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    maxHeight: '50%',
  },
  optionItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  optionText: {
    textAlign: 'center',
  },
  heightInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heightInput: {
    width: '40%', // Adjust width as needed
  },
})
