import{ useEffect, useState,useRef ,React } from "react";
import { View ,StyleSheet,Text, TextBase,TouchableOpacity,Image,ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';
const image = require("../images/image.png")


const Profile = ({route}) =>{
    const [follow,set_status] = useState("follow");
    const { item } = route.params;
    const [count,set_count] = useState(item.followers);
    function change(){
        if(follow == "follow"){
            set_count(count+1)
            set_status("unfollow")
        }
        else{
            set_count(count-1)
            set_status("follow")
        }
    }
    const navigation = useNavigation();
    const name = item.name.split(".")[1];
    const images = [
        'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1436102/pexels-photo-1436102.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/20427308/pexels-photo-20427308/free-photo-of-entrance-of-hotel-le-bellevue-in-biarritza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/27531110/pexels-photo-27531110/free-photo-of-turkish-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/27586893/pexels-photo-27586893/free-photo-of-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    ]
    return(
        <ScrollView style={{width : "100%" ,height : "100%"}}>
        <View style={styles.profile_container}>
            <View style={styles.profile_container_nav}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style= {{color : "white"}}> ← Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style= {{color : "white"}}> personal  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style= {{color : "white"}}> proficianal  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Text style= {{color : "white"}}> company  </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.header_view}>
                <View>
                    <Text>❤️ {count} Foloweers</Text>
                    <View style = {styles.follow_and_share}>
                        <TouchableOpacity onPress={() => change()}>
                            <Text>Follow</Text>
                        </TouchableOpacity>
                        <Text>|</Text>
                        <TouchableOpacity>
                            <Text>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style ={styles.main_image_place}>
                    <TouchableOpacity onPress={() => navigation.navigate("image_view",{url : item.profileImage})}><Image source={{uri : item.profileImage}} style= {styles.main_image}/>
                    <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/228BE6/instagram-verification-badge.png',
              }}
              style={styles.verifybadge}
            /></TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.h2}>Dr</Text>
                    <Text style={styles.h1}>{name}</Text>
                    <Text>{item.role}</Text>
                    <Text><Image
                source={{uri: 'https://img.icons8.com/?size=48&id=13778&format=png'}}
                style={{width : 20, height : 20}} />{item.location}</Text>
                </View>
                <View>
                    <Text numberOfLines={2} ellipsizeMode="tail" style = {{whiteSpace: 'nowrap'}}><Text style={styles.bold_text}>Talks About 
                    </Text> {item.description} {item.hashtags}</Text>
                </View>
            </View>
        </View>
        <View style={styles.matrix_flex}>
              {images.map((url,index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate("image_view",{url : url})}>
                    <Image source={{uri : url}} style = {{width : 100,height : 100}}/>
                </TouchableOpacity>
              ))}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    profile_container : {
        width : "100%",
        borderColor : "black",
        borderWidth : 2,
        backgroundColor : "brown"
    },
    profile_container_nav :{
        width : "100%",
        height : 60,
        justifyContent : "space-around",
        alignItems : "center",
        flexDirection : "row",
        backgroundColor: "transparent",
    },
    buttons : {
        padding : 5,
        backgroundColor : "#2f2f2f",
        borderRadius : 10,
        
    },
    header_view : {
        padding : 15,
    },
    follow_and_share :{
        borderWidth : 1,
        borderRadius : 10,
        borderColor  : "black",
        width : 130,
        justifyContent : "space-around",
        alignItems : "center",
        flexDirection : "row",
        padding : 5,
        marginTop : 5
    },
    main_image_place :{
        alignSelf : "flex-end"
    },
    main_image : {
        width : 130,
        height : 130,
        borderRadius : 65,
        borderColor : "white",
        borderWidth : 2
    },
    bold_text :{
        fontSize: 14,
        fontWeight: '800', 
    },
    verifybadge : {
        width : 20,
        height : 20,
        position : "absolute",
        bottom : 5,
        right : 10
    },
    h2 : {
        fontSize : 24,
        fontWeight : "600"
    },
    h1 : {
        fontSize : 30,
        fontWeight : "700"
    },
    matrix_flex : {
        marginTop : 20,
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-around"
    }

})

export default Profile;