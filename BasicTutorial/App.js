
import React,{useState} from 'react';

import {
  
  Button,
  
  StyleSheet,
  Text,
  View,
} from 'react-native';
 


const App = () => {

const [name,setName]=useState('Styling and Style Sheets' )

const onClickHandle=()=>{
setName('Styling is Completed!!!')
}
  return (
<View style={styles.body}>
 <Text style={styles.text}>{name}</Text>
<View style={styles.button}>
<Button title='   Update State   ' onPress={onClickHandle} ></Button>

</View>
</View>    
  );
};

const styles = StyleSheet.create({
 body:{
   flex:1,
  //  width:'100%',
  //  height:'50%',
  // width:300,
  // height:500,
   backgroundColor:'#0fffff',
   alignItems:'center',
   justifyContent:'center',
   borderWidth:10,
   borderColor:'#ff00ff',
   borderRadius:10,
  //  margin:40,

 },
 text:{
    color:'#000000',
    fontSize:30,
    fontStyle:'italic',
    fontWeight:'500',
    margin:10

 },
 button:{
height:60,
width:200
 }
});

export default App;
