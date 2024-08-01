import React from 'react';
import {Text, View, Button} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
//import {useNavigation} from 'react-navigation/navigation'

 const ListScreen = ({navigation}) => {
  
   return (
  
   <View
   style={{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   }}>
   <Button
   title='Go back'
   onPress={() => navigation.navigate('Home', {name: 'Home'})}/>
   <Button
   title='See Movies list'
   onPress={() => navigation.navigate('Movies', {name: 'Movies'})}/>
  
   </View>
   
   
   );
 };
export default ListScreen;
//export default withNavigation(ListScreen);