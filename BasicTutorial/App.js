
import React,{useState} from 'react';

import {
  
  Button,
  
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 


const App = () => {

const [name,setName]=useState('Initial State' )
const [session,setSession]=useState({number:6,title:'Before update'})
const [current,setCurrent]=useState(true)
const onClickHandle=()=>{
  setName('Final State')
  setSession({number:7,title :'After update'})
  setCurrent(false)
}
  return (
<View style={styles.body}>
  <Text style={styles.text}>{name} </Text>
  <Text style={styles.text}>Session number: {session.number}</Text>
 <Text style={styles.text}> About: {session.title} </Text>
 <Text style={styles.text}> {current?'Current session':'Next Session'} </Text>


  <Button title='State Change check' onPress={onClickHandle}></Button>
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
