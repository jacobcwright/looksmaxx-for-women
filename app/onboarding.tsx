import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAsyncStorage } from '../hooks/useAsyncStorage'
import SplashOne from '@/components/Onboarding/Welcome/SplashOne'
import SplashTwo from '@/components/Onboarding/Welcome/SplashTwo'
import SplashThree from '@/components/Onboarding/Welcome/SplashThree'
import Demographics from '@/components/Onboarding/UserInfo/Demographics'
import Goals from '@/components/Onboarding/UserInfo/Goals'
import Stepper from '@/components/Stepper'
import FaceScan from '@/components/Onboarding/Scans/FaceScan'
import BodyScan from '@/components/Onboarding/Scans/BodyScan'
import NotFoundScreen from './+not-found'

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
              <SafeAreaView
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: '#FFF8F8',
                }}
              >
                <Stepper steps={5} currentStep={1} />
                <Demographics />
              </SafeAreaView>
            )
          case '4':
            return (
              <SafeAreaView
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: '#FFF8F8',
                }}
              >
                <Stepper steps={5} currentStep={2} />
                <Goals />
              </SafeAreaView>
            )
          case '5':
            return (
              <SafeAreaView
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: '#FFF8F8',
                }}
              >
                <Stepper steps={5} currentStep={3} />
                <FaceScan />
              </SafeAreaView>
            )
          case '6':
            return (
              <SafeAreaView
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: '#FFF8F8',
                }}
              >
                <Stepper steps={5} currentStep={4} />
                <BodyScan />
              </SafeAreaView>
            )
          default:
            return <NotFoundScreen />
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
