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

const SplashTwo = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('@/assets/images/splash2.webp')}
        alt='aesthetics'
        style={styles.image}
      />
      <View style={{ ...styles.body, gap: 20 }}>
        <Text style={styles.head}>
          Improve your <Text style={styles.glow}>appearance</Text>
        </Text>
        <Text style={styles.subtitle}>
          Reach your full potential with the help from a professional looks
          coach.
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

export default SplashTwo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#FF93C7',
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
