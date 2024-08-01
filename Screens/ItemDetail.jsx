import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
//import {NavigationContainer} from '@react-navigation/native';
//import {useNavigation} from 'react-navigation/navigation'

 const ItemDetail = ({route, navigation}) => {
    //const route = useRoute;
    const { overview } = route.params.title;
    const { poster_path } = route.params.title;
    const { title } = route.params.title
    //const {imageUri} = "https://image.tmdb.org/t/p/w500"+route.params.item.poster_path
   return (
  
   <View
   style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    }}>
   
   <Text style = {{fontsize: 37}}>{title }</Text>
   <Image source={{uri :  "https://image.tmdb.org/t/p/w500"+poster_path}} style = {styles.image}/>
    <Text>{overview}</Text>
   
   <Button
   title='Go back'
   onPress={() => navigation.navigate('Home', {name: 'Home'})}/>
   <Button
   title='See Movies list'
   onPress={() => navigation.navigate('Movies', {name: 'Movies'})}/>
  
   </View>
   
   
   );
 };
export default ItemDetail;

const styles = StyleSheet.create({
    image: {
        justifyContent: "center",
        height: 200,
        width: 200,
    }})
//export default withNavigation(ListScreen);