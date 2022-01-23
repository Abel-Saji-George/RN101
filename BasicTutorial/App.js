
import React,{useState} from 'react';

import {
    
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
 


const App = () => {

  const [Items,setItems]=useState([
    {name:'Item 1'},
    {name:'Item 2'},
    {name:'Item 3'},
    {name:'Item 4'},
    {name:'Item 5'},
    {name:'Item 6'},
    {name:'Item 7'},
    {name:'Item 8'},
    {name:'Item 9'},
    {name:'Item 10'},
    {name:'Item 11'},
    {name:'Item 12'},

  ]
)
const [Refreshing,setRefreshing]=useState(false)

const onRefresh=()=>{
  setRefreshing(true);
  setItems([...Items,{name:'Item 69'}]);
  setRefreshing(false);
}

  return (
    <FlatList
    keyExtractor={(item,index)=>index.toString()}
    data={Items}
    renderItem={
      ({item})=>(
        <View style={styles.item}>
               <Text style={styles.text}>{item.name}</Text>
        </View>
      )
    }
    refreshControl={
         <RefreshControl
         refreshing={Refreshing}
         onRefresh={onRefresh}
         colors={['#0000ffff']}
         />
       }
  />
  // <ScrollView style={styles.body} 
  //
  // >
  // {
  //   Items.map((object)=>{
  //     return(
  //
  //     );
  //   })
  // }
  // </ScrollView>

  );
};

const styles = StyleSheet.create({
 
 item:{
   margin:10,
   backgroundColor:'#4fffff',
   justifyContent:'center',
   alignItems:'center'
 } ,
 
 body:{
   flex:1, 
   flexDirection:'column',

   backgroundColor:'#ffffffff',


 },

 text:{
    color:'#000000',
    fontSize:45,
    fontStyle:'italic',
    fontWeight:'500',
    margin:10

 },
 

});

export default App;
 