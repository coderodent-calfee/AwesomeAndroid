/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { useEffect, useState } from "react";
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Text as RNText, StyleProp, TextProps, TextStyle } from "react-native";

import Text from "./web/components/Text";
import Button from "./web/components/Button";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Frontend from './web/app/index';
import WebGuest from './web/app/guest';
import WebTest from './web/app/test';
import Lobby from './web/app/lobby';

import { NavigationProvider, navigationRef } from './web/providers/NavigationProvider';
import { AuthProvider } from './web/providers/AuthProvider';
import { RequestProvider } from './web/providers/RequestProvider';



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import EmptyScreen from './web/screens/EmptyScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;





function App(): JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
      const fontsToCheck = [
      'Mitr-Regular',
      'Mitr-Light',
      'Mitr-ExtraLight',
      'Mitr-Medium',
      'Mitr-SemiBold',
      'Mitr-Bold',
    ];

    
  return (

    <RequestProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <EmptyScreen />
          <View style={styles.container}>
            <RNText style={{ fontFamily: 'Mitr-Regular', fontSize: 24 }}>
              Mitr-Regular 000
            </RNText>
            <RNText style={{ fontFamily: 'Mitr-Bold', fontSize: 24 }}>
              Mitr-Bold 000
            </RNText>
            <RNText style={{ fontFamily: 'System', fontSize: 24 }}>
              System fallback 000
            </RNText>

            <View style={styles.container}>
              {fontsToCheck.map(f => (
                <RNText key={f} style={{ fontFamily: f, fontSize: 24, color: 'black' }}>
                  {f} — 000 The quick brown fox
                </RNText>
              ))}
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </RequestProvider>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default App;
