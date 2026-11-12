import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
// import { MdOutlineArrowBackIos } from "react-icons/md";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Jakarta from "@expo-google-fonts/plus-jakarta-sans";


export function Apptabs() {
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
                <FontAwesome5 style={styles.user} name="user" size={20} color="white" />
                <FontAwesome5 style={styles.basket} name="shopping-basket" size={20} color="black"/>
              </View>
          </View>
          <View style={styles.subtitle}>
            <Text style={styles.relax}>
              <MaterialCommunityIcons name="leaf-circle-outline" size={24} color="black" />
              Relax
            </Text>
              <Text style={styles.sleep}>
                <Octicons style={styles.sleep} name="moon" size={24} color="black" />
                Sleep
              </Text>
          </View>
               <View style={styles.numbersContainer}>
                  <Text style={styles.firstNumber}>30</Text>
                  <Text style={styles.secondNumber}>60</Text>
                  <Text style={styles.thirdNumber}>90</Text>
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
    backgroundColor:"#c29305",
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
  basket:{
    backgroundColor: "white",
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
   color: '#94781c',
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
  backgroundColor: "black",
  color:"#FBC528",
  borderWidth: 1,
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
  secondNumber: {
  backgroundColor:'#B5942C',
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
  backgroundColor:'#B5942C',
  fontSize: 30,
  color:"#FBC528",
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
});