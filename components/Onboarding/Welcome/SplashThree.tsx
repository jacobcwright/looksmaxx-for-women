import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import NextButton from '@/components/NextButton'

type Props = {
  onPress: () => void
}

const SplashThree = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('@/assets/images/splash3.webp')}
        alt='aesthetics'
        style={styles.image}
      />
      <View style={{ ...styles.body, gap: 20 }}>
        <Text style={styles.head}>
          We will create a <Text style={styles.glow}>routine</Text>
        </Text>
        <Text style={styles.subtitle}>
          You follow your custom routine, check in with us daily, and the
          routine will adjust based on your progress.
        </Text>
      </View>
      <NextButton
        onPress={props.onPress}
        backgroundColor='#FFF'
        color='black'
      />
    </SafeAreaView>
  )
}

export default SplashThree

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#FF7ABA',
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginVertical: 20,
  },
  body: {
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  head: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'DMSerifDisplay',
  },
  glow: {
    color: '#FFF',
    fontStyle: 'italic',
    fontFamily: 'DMSerifDisplayItalic',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
  },
})
