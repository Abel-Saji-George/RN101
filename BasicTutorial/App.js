
import React from 'react';

import {
  
  Button,
  Linking,
  StyleSheet,
  Text,
  
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 


const App = () => {



  return (
<View style={styles.body}>
  <Text style={styles.text}>This is my profile Link</Text>
  <Button title='LinkedIn' onPress={()=>{Linking.openURL("https://www.linkedin.com/in/abel-saji-george-b416591ab/")}}></Button>
</View>    
  );
};

const styles = StyleSheet.create({
 body:{
   flex:1,
   backgroundColor:'#ff6666',
   alignItems:'center',
   justifyContent:'center',

 },
 text:{
    color:'#99ff99',
    fontSize:30,
    fontStyle:'italic',
    fontWeight:'500',
    margin:10

 }
});

export default App;
