import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Candle = ({color}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 80,
      }}>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'row',
          },
        ]}>
        <View style={{flex: 8, backgroundColor: color}} />
        <View style={{flex: 2, backgroundColor: 'red'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Candle;
