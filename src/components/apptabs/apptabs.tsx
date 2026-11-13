import { ImageBackground, StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from 'react';
// import { MdOutlineArrowBackIos } from "react-icons/md";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Jakarta from "@expo-google-fonts/plus-jakarta-sans";


export function Apptabs() {
    const [icon, setIcon] = useState<'user' | 'basket' | null>(null);
    const [number, setNumber] = useState<'30' | '60' | '90'| null>(null);
  const [loaded] = Jakarta.useFonts(Jakarta);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/tabIcons/pharmacy.jpg")}
        style={styles.background}
      >
     <View style={styles.overlay}>
          <View style={styles.headerRow}>
                <View style={styles.leftSide}>
                  <Entypo style={styles.back} name="chevron-left" size={29} color="black" />
                  <Ionicons name="aperture-outline" size={45} color="black" />
                  <Text style={styles.title}>xefag </Text>
                </View>
               <View style={styles.rightSide}>
             <Pressable
                onPress={() => setIcon(icon === 'user' ? null : 'user')}
                style={[styles.user, { backgroundColor: icon === 'user' ? 'white' : "#c29305", }]}>
                <FontAwesome5 style={styles.user} name="user" size={20} color={icon === 'user' ? 'black' : 'white'} />
              </Pressable>
              <Pressable
                onPress={() => setIcon(icon === 'basket' ? null : 'basket')}
                style={[styles.basket, { backgroundColor: icon === 'basket' ? 'white' : "#c29305", }]}>
                <FontAwesome5 style={styles.basket} name="shopping-basket" size={20} color={icon === 'basket' ? 'black' : 'white'} />
                <Text style={styles.items}>3</Text>
              </Pressable>
              </View>
          </View>
          <View style={styles.subtitle}>
            <Text style={styles.relax} >
              <MaterialCommunityIcons name="leaf-circle-outline" size={24} color="black" />
              Relax
            </Text>
              <Text style={styles.sleep}>
                <Octicons style={styles.sleep} name="moon" size={24} color="black" />
                Sleep
              </Text>
          </View>
               <View style={styles.numbersContainer}>
                <Pressable
                onPress={() => setNumber(number === '30' ? null : '30')}
                style={[styles.firstNumber, { backgroundColor: number === '30' ? 'black' : '#b39125', }]}>
                  <Text style={styles.firstNumber}>30</Text> 
                </Pressable>

                 <Pressable
                onPress={() => setNumber(number === '60' ? null : '60')}
                style={[styles.secondNumber, { backgroundColor: number === '60' ? 'black' : '#b39125', }]}>
                  <Text style={styles.secondNumber}>60</Text>
                </Pressable>

                  <Pressable
                onPress={() => setNumber(number === '90' ? null : '90')}
                style={[styles.thirdNumber, { backgroundColor: number === '90' ? 'black' : '#b39125', }]}>
                  <Text style={styles.thirdNumber}>90</Text>
                </Pressable>
                  
              </View>
     </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  background: {
    resizeMode: "cover",
    width: "100%",
    height: 580,
  },
  overlay: {
    marginTop: 50,
  },
  headerRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 15,
  margin:15,
  marginTop: 30,
},
leftSide: {
  alignItems: "flex-start",
    flexDirection: "row",
  gap: 10,
},
  back:{
     backgroundColor: "white",
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
    title: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontWeight: "bold",
    color: "#111111",
    fontSize: 35,
    borderRadius: 6,
    marginTop:-5
  },
rightSide: {
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 15,
},
  user:{
   
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
  basket:{
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
    subtitle: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 15,
  marginTop: 30,
  gap:50,
  margin:15
},
  relax: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 20,
  },
  sleep: {
   color: '#8b6f12',
  fontFamily: "PlusJakartaSans_700Bold",
    fontWeight:"bold",
    fontSize: 20,
  },
    numbersContainer:{
     alignItems: "flex-end",
     marginLeft: 20,
     marginTop: -60,
     gap: 10,
     padding: 10,
     margin:15
  },
  firstNumber: {
    fontSize: 30,
  color:"#FBC528",
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
  secondNumber: {
fontSize: 30,
  color:"#FBC528",
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  
  },
  thirdNumber: {
  fontSize: 30,
  color:"#FBC528",
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
  items:{
    backgroundColor:"black",
    color: "white",
    borderRadius: 25,
    height: 15,
    width:15,
    fontSize: 15,
    marginTop: -50,
    marginLeft: 35,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight:"600"
  }
});