import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAsyncStorage } from '../hooks/useAsyncStorage'
import SplashOne from '@/components/Onboarding/Welcome/SplashOne'

type Props = {}

const Onboarding = (props: Props) => {
  const [onboardingStep, setOnboardingStep] = useAsyncStorage<string>(
    'onboarding_step',
    '0'
  )

  const handleNext = () => {
    const nextStep = parseInt(onboardingStep) + 1
    if (nextStep > 4) {
      setOnboardingStep('0')
      return
    }
    setOnboardingStep(nextStep.toString())
  }

  return (
    <SafeAreaView style={styles.container}>
      {(() => {
        switch (onboardingStep) {
          case '0':
            return <SplashOne onPress={handleNext} />
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
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB1D7',
  },
})
