// create a file  src/components/ButtonEx.js
import React from 'react'; // import lib
import {Text, Button, View} from 'react-native';

// JSX
const ButtonEx = function () {
  return (
    <View>
      <Text>Hello to React Native</Text>
      <Button
        onPress={() => {
          alert('Hello');
        }}
        title="Hello "
      />
    </View>
  );
};
export default ButtonEx;
