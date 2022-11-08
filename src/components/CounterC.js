import {Text, Button} from 'react-native';
import React, {useState} from 'react';

export class CounterC extends React.Component {
  // local
  state = {count: 0};
  render() {
    console.log('render ..');
    return (
      <>
        <Button
          title="Increment"
          onPress={() => {
            //this.state.count++;
            console.log('this.state.count:' + this.state.count);
            this.setState({count: this.state.count + 1});
          }}
        />
        <Text> Count: {this.state.count} </Text>
      </>
    );
  }
}

//
export function Counter() {
  console.log('render .. func');
  const [counter, setCounter] = useState(0);
  //state = {count:0};
  return (
    <>
      <Button
        title="Increment"
        onPress={() => {
          setCounter(oldVal => oldVal + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCounter(oldVal => oldVal - 1);
        }}
      />
      <Button
        title="reset"
        onPress={() => {
          setCounter(oldVal => (oldVal = 0));
        }}
      />
      <Text> counter: {counter} </Text>
    </>
  );
}
