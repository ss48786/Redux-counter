


import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
  
} from 'react-native';
import reducer from './reducer';
import store from './store';
import types from './types';
import {increment,decrement}from './action'



export default class Counter extends Component{
  
//   increment=()=>{
//     this.setState({
//       counter:this.state.counter+1
//     })
//   }
//   decrement=()=>{
//     this.setState({
//       counter:this.state.counter-1
//     })
//   }
//  check = store.subscribe(() => this.setState(({})))


  render()
{
    const {dispatch, getState }= store;
  return(
      <View style={{flex:1}}>
<View style={{flexDirection:"row", justifyContent:"center", margin:30, marginTop:300} }>
<Button title="-" onPress={()=> store.dispatch(decrement())}/>
  <Text style={{marginLeft:20,marginRight:20}}>
   
    {/* {store.getState().count} */}
    {store.subscribe(() => console.log(store.getState()))}
    

    
  </Text>
  <Button title="+" onPress={()=> store.dispatch(increment())}/>
</View>
</View>
  );
}
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
});











// import React, {Component} from 'react';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Button
  
// } from 'react-native';




// export default class Counter extends Component{
  
// //   


//   render()
// {
    
//   return(
//       <View>
//           <Text>jgkujgkugy6ryrhrtrttgrgts</Text>
//       </View>
//   );
// }
// }
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

