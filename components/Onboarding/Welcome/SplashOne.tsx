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

const SplashOne = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('@/assets/images/splash1.webp')}
        alt='aesthetics'
        style={styles.image}
      />
      <View style={{ ...styles.body, gap: 20 }}>
        <Text style={styles.head}>
          Welcome to <Text style={styles.glow}>HotGirl</Text>
        </Text>
        <Text style={styles.subtitle}>
          The app that helps you improve your appearance and gives you a guide
          and{'\n'}schedule so you aren’t let stranded.
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

export default SplashOne

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#FFB1D7',
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
