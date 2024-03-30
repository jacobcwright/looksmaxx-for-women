import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAsyncStorage } from '../hooks/useAsyncStorage'

type Props = {}

const Onboarding = (props: Props) => {
  const [onboardingStep, setOnboardingStep] = useAsyncStorage<string>(
    'onboarding_step',
    '0'
  )

  return (
    <SafeAreaView>
      {(() => {
        switch (onboardingStep) {
          case '0':
            return (
              <View>
                <Text>Step 0</Text>
              </View>
            )
          case '1':
            return (
              <View>
                <Text>Step 1</Text>
              </View>
            )
          case '2':
            return (
              <View>
                <Text>Step 2</Text>
              </View>
            )
          case '3':
            return (
              <View>
                <Text>Step 3</Text>
              </View>
            )
          case '4':
            return (
              <View>
                <Text>Step 4</Text>
              </View>
            )
          default:
            return (
              <View>
                <Text>Step 0</Text>
              </View>
            )
        }
      })()}
      <Button
        title='Next'
        onPress={() => {
          const nextStep = parseInt(onboardingStep) + 1
          setOnboardingStep(nextStep.toString())
        }}
      />
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({})