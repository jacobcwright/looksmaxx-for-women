import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

type Props = {
  steps: number
  currentStep: number
  stepColor?: string
  currentStepColor?: string
}

const Stepper = ({
  steps,
  currentStep,
  currentStepColor = '#FFB1D7',
}: Props) => {
  return (
    <View style={styles.stepper}>
      <View
        style={{
          ...styles.step,
          width: `${(currentStep / steps) * 100}%`,
          backgroundColor: currentStepColor,
        }}
      />
    </View>
  )
}

export default Stepper

const styles = StyleSheet.create({
  stepper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    borderRadius: 10,
  },
})
