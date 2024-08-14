import React from "react";
import { View,Text, TextBase,StyleSheet,FlatList,TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import doctors from "./information"
const List_of_docters = () =>{
    const navigation = useNavigation();
    return(
        <View>
            <Text style={styles.main_heading}>
                List of the docters
            </Text>
            <FlatList 
                data={doctors} 
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.each_profile} onPress={() => navigation.navigate("profile",{item}) }>
                    <View>
                        <Text style={{ color: "black", fontSize: 18 }}>{item.name}</Text>
                        <Text style={{ color: "gray" }}>{item.role}</Text>
                    </View>
                    <Image source={{uri : item.profileImage}} style={styles.profile_image}/>
                    </TouchableOpacity>
                )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main_heading : {
        color : "black",
        alignSelf : "center",
        fontSize : 24,
        fontWeight : "700",
        marginVertical : 10
    },
    profile_image : {
        width : 40,
        height : 40,
        borderRadius : 20,
        borderWidth : 1,
        borderColor : "black"
    },
    each_profile :{
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        justifyContent : "space-between" ,
        flexDirection : "row",
        paddingHorizontal : 20
    }
})

export default List_of_docters;