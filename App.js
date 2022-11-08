import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ButtonEx from './src/components/ButtonEx.js';
import {Counter, CounterC} from './src/components/CounterC.js';
import Login from './src/components/Login.js';
import Manager from './src/components/Person.js';
import {Employee, Person} from './src/components/Person.js';
import {Timer} from './src/components/Timer.js';
import Cat from './src/components/Cat';
import ShowHide from './src/components/ShowHide';
import Flex from './src/components/Flex.js';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          height: '100%',
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Flex />
      </View>
    </SafeAreaView>
  );
};

export default App;

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView contentInsetAdjustmentBehavior="automatic">
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           {/* <Text> Hello </Text> */}
//           {/* <ButtonEx /> */}
//           {/* <Login /> */}
//           {/* <Person name={'Tengo'} email={'Tengoswokr'} /> */}
//           {/* <Manager name={'Tengo'} email={'Tengoswokr'} /> */}
//           {/* <Employee name={'Tengo'} email={'Tengoswokr'} /> */}
//           {/* <CounterC /> */}
//           {/* <Counter /> */}
//           {/* <Timer></Timer> */}
//           {/* <Cat></Cat> */}
//           {/* <ShowHide></ShowHide> */}
//           <Flex></Flex>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

//export default App;
