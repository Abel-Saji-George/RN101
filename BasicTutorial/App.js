
import React,{useState} from 'react';

import {
  
  Button,
  
  StyleSheet,
  Text,
  View,
} from 'react-native';

 


const App = () => {

const [by1counter,setBy1counter]=useState(0)
const [by5counter,setBy5counter]=useState(0)

const onClickHandle=()=>{
  setBy1counter(by1counter+1)
  setBy5counter(by5counter+5)

}
  return (
<View style={styles.body}>
  <Text style={styles.text}>{by5counter} </Text>


  <Button title='  ADD  ' onPress={onClickHandle} ></Button>
  <Text style={styles.text}>You clicked {by1counter} times</Text>

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
