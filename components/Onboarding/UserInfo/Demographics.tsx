import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import NextButton from '@/components/NextButton'

type Props = {
  onPress: () => void
}

const Demographics = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s get to know you a little better!</Text>
      <Text style={styles.subtitle}>
        Answer the following prompts below to access your potential
      </Text>
    </View>
  )
}

export default Demographics

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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
