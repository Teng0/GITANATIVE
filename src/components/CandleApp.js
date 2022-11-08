import React, {useState} from 'react';
import {Button, View} from 'react-native';
import Candle from './Color';
const CandleApp = () => {
  const [candles, setCandles] = useState([
    {color: 'green'},
    {color: 'yellow'},
    {color: 'pink'},
  ]);
  let addCandle = color => {
    setCandles([...candles, {color}]);
  };
  return (
    <View>
      {candles.map(item => (
        <Candle color={item.color} />
      ))}
      <Button
        title="RED"
        onPress={() => {
          addCandle('red');
        }}
      />
      <Button
        title="PINK"
        onPress={() => {
          addCandle('pink');
        }}
      />
      <Button
        title="YELLOW"
        onPress={() => {
          addCandle('yellow');
        }}
      />
    </View>
  );
};

export default CandleApp;
