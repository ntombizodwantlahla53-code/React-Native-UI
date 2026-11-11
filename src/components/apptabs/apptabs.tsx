import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
// import { MdOutlineArrowBackIos } from "react-icons/md";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';


export function Apptabs() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/tabIcons/pharmacy.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <View style={styles.headerRow}>
            <View style={styles.leftSide}>
              <Entypo name="chevron-left" size={45} color="black" />
            </View>
              <Text style={styles.title}>Xefag</Text>
              <View style={styles.rightSide}>
                <FontAwesome5 name="user" size={24} color="black" />
                <FontAwesome5 name="shopping-basket" size={24} color="black"/>
              </View>
        </View>

          <View style={styles.subtitle}>
          <Text style={styles.sub}>
            <MaterialCommunityIcons name="leaf-circle-outline" size={24} color="black" />
            Relax</Text>

         <Text style={styles.sub}>
          <Octicons name="moon" size={24} color="black" />
          Sleep</Text>
          </View>
          <View style={styles.numbersContainer}>
  <Text style={styles.number}>30</Text>
  <Text style={styles.number2}>60</Text>
  <Text style={styles.number3}>90</Text>
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
  numbersContainer:{
     alignItems: "flex-end",
     marginLeft: 20,
     marginTop: -30,
     gap: 10,
     padding: 10,
  },
  title: {
    fontFamily: "reduction",
    fontWeight: "bold",
    color: "#111111",
    fontSize: 30,
    borderRadius: 6,
    alignItems: "center",
    textAlign: "center",
  },
  subtitle: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 15,
  marginTop: 30,
  gap:50
},

  sub: {
    fontWeight:"bold"
  },
  headerRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 15,
  marginTop: 30,
},
leftSide: {
  alignItems: "flex-start",
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: "white"
},
rightSide: {
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 15,
},

  number: {
    fontSize: 20,
  backgroundColor: "black",
  color: "white",
  borderWidth: 1,
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
  number2: {
    fontSize: 20,
  color: "white",
  borderWidth: 1,
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
  number3: {
    fontSize: 20,
  color: "white",
  borderWidth: 1,
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
});
