import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAsyncStorage } from '../hooks/useAsyncStorage'
import SplashOne from '@/components/Onboarding/Welcome/SplashOne'
import SplashTwo from '@/components/Onboarding/Welcome/SplashTwo'
import SplashThree from '@/components/Onboarding/Welcome/SplashThree'

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
    <>
      {(() => {
        switch (onboardingStep) {
          case '0':
            return <SplashOne onPress={handleNext} />
          case '1':
            return <SplashTwo onPress={handleNext} />

          case '2':
            return <SplashThree onPress={handleNext} />

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
      <View style={{ position: 'absolute', bottom: 20, left: 20 }}>
        <Button
          title='Reset'
          onPress={() => {
            setOnboardingStep('0')
          }}
        />
      </View>
    </>
  )
}

export default Onboarding

const styles = StyleSheet.create({})
