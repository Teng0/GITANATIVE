import React from 'react'; // import lib
import {Text, Button, View} from 'react-native';

// In App.js
// import Manager, {Person,Employee} from './src/components/Person';

// default export
export default function Manager({name, email}) {
  return (
    <View style={{marginLeft: 10}}>
      <Text style={{height: 50}}>Manager Comp</Text>
      <Text>Name {name}</Text>
      <Text>Email {email}</Text>
    </View>
  );
}

// named export
export function Person({name, email}) {
  return (
    <View style={{marginLeft: 10}}>
      <Text style={{height: 50}}>Person Comp</Text>
      <Text>Name {name}</Text>
      <Text>Email {email}</Text>
    </View>
  );
}

// named export
export function Employee({name, email}) {
  return (
    <View style={{marginLeft: 10}}>
      <Text style={{height: 50}}>Employee Comp</Text>
      <Text>Name {name}</Text>
      <Text>Email {email}</Text>
    </View>
  );
}
