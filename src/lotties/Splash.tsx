import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../routes/stack.routes';

export default function App() {
  const animation = useRef(null);
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
        }}
        source={require('../assets/splash.json')}
        loop={false}
        onAnimationFinish={() => navigate('Home')}
        speed={1.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
