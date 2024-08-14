import React from "react";
import { View,Image,Text,StyleSheet } from "react-native";
const Image_view = ({route}) =>{
    const {url} = route.params;
    return (
        <View style = {styles.main_container}>
            <Image source={{uri : url}} style = {styles.image_size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container : {
        width : "100%",
        height : "100%",
    },
    image_size : {
        width : "100%",
        height : "50%"
    }
})

export default Image_view