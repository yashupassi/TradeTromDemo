/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { memo } from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Strategies from './src/screens/Strategies';
import Colors from './src/color/Colors';
import { injectStore, store } from './src/redux';


const WrappedComponent = injectStore(Strategies, store);

const App = () => <WrappedComponent />;
export default memo(App);
// function App(): JSX.Element {

//   return (
//     <SafeAreaView style={{flex:1, backgroundColor:Colors.white}}>
//       <Strategies />
//     </SafeAreaView>
//   );
// }

// export default App;
