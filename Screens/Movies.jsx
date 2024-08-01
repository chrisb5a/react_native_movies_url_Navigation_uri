import React, {useEffect, useState} from 'react';
import {Text, View, Button, ActivityIndicator, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
//import { FlatList } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
//import {NavigationContainer} from '@react-navigation/native';
//import {useNavigation} from 'react-navigation/navigation'


 
   const Movies = ({navigation}) => {
   const[Movie, setMovies] = useState([]);
   const[isLoading, setIsLoading] = useState(true);
   const[error, setError] = useState(null);
   useEffect(()=> {getMovies();}, [])
   const getMovies = () =>{
    const URL = "https://api.themoviedb.org/3/movie/popular?api_key=705f7bed4894d3adc718c699a8ca9a4f&language=en-US&page=1"
    fetch(URL)
        .then((res) => {
            if (!res.ok){

                throw new Error("This is not it!")
            }
            return res.json();})
            .then((data)=>{ 
                setMovies(data.results);
                setIsLoading(false);
                console.log("Heeeeeeeeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
                //console.log(data);

            }).catch((error) => {
                setIsLoading(false);
                setError(error.message);
                console.log(error.message);
            });
   };
   return (
    console.log(Movie),
    
   <View style = {styles.cardContainer}>
    {isLoading ? (<ActivityIndicator color ="red" size = "large"/>): error ?
    <Text style ={styles.errorStyle}>{error}</Text> : (
    <FlatList 
        data={Movie}
        renderItem={({item}) =>(
            <TouchableOpacity onPress={() => {
                navigation.navigate('ItemDetail', {title: item,
                    
                })
            }

            }
            >
            <View>
                <Image source={{uri:"https://image.tmdb.org/t/p/w500"+item.poster_path}} style = {styles.image}/>
                <Text style={{fontSize: 18, textAlign: "center"}}>{item.title}</Text>
            </View>
            </TouchableOpacity>
            )}
    />)}
   
   
    </View>
    // </SafeAreaView>
   );
 };
export default Movies;
const styles = StyleSheet.create({
    errorStyle:{
        //flex: 1,
        justifyContent: 'center',
        color : "red",
        alignItems: "center",
        //textAlignVertical: "center",
        //textAlign: "center",
        fontSize: 18,
    },
    cardContainer:{
        backgroundColor: "fff",
        borderRadius: 10,
        padding:20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20,
    },
    image: {
        height: 200,
        width: 200,
    }
});