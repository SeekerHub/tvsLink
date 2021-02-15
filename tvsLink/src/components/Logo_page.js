import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/tvsLink.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 50,
    marginBottom: 8,
  },
})

export default Logo
