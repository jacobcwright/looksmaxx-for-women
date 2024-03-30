import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  onPress: () => void
  backgroundColor: string
  color: string
}

const NextButton = (props: Props) => {
  return (
    <Pressable
      style={{
        backgroundColor: props.backgroundColor || '#FFF',
        padding: 16,
        borderRadius: 20,
        position: 'absolute',
        bottom: 40,
        right: 20,
      }}
      onPress={props.onPress}
    >
      <AntDesign name='arrowright' size={24} color={props.color} />
    </Pressable>
  )
}

export default NextButton

const styles = StyleSheet.create({})
