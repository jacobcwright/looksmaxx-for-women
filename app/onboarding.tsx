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
import NextButton from '@/components/NextButton'

type Props = {}

const Onboarding = (props: Props) => {
  const [onboardingStep, setOnboardingStep] = useAsyncStorage<string>(
    'onboarding_step',
    '0'
  )

  const handleNext = () => {
    const nextStep = parseInt(onboardingStep) + 1
    if (nextStep > 6) {
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
                <NextButton
                  onPress={handleNext}
                  backgroundColor={'#FFB1D7'}
                  color={'#FFF'}
                />
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
                <NextButton
                  onPress={handleNext}
                  backgroundColor={'#FFB1D7'}
                  color={'#FFF'}
                />
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
                <NextButton
                  onPress={handleNext}
                  backgroundColor={'#FFB1D7'}
                  color={'#FFF'}
                />
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
                <NextButton
                  onPress={handleNext}
                  backgroundColor={'#FFB1D7'}
                  color={'#FFF'}
                />
              </SafeAreaView>
            )
          default:
            return <SplashOne onPress={handleNext} />
        }
      })()}
    </>
  )
}

export default Onboarding

const styles = StyleSheet.create({})
