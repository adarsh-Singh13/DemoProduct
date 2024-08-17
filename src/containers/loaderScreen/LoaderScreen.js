import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

export function LoaderScreen() {
  return (
    <SafeAreaView style={{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '80%',
    }}>
     <View style={styles.container}>
      <LottieView
        source={require('../../assets/anim/looder.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
        <View style={styles.textContainer}>
            <Text>
                wait products are loading
            </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    lottie: {
      width: 250,
      height: 270,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '20%',
    },
  });