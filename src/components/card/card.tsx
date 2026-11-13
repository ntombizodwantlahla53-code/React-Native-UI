import { Button, StyleSheet, Text, View ,TouchableOpacity} from "react-native";
// import { MdOutlineArrowBackIos } from "react-icons/md";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Jakarta from "@expo-google-fonts/plus-jakarta-sans";

export function card() {
  const [loaded] = Jakarta.useFonts(Jakarta);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relax 30 {"\n"}Dissolvable Wafers</Text>
      <Text style={styles.mg}>250mg</Text>
      <View style={styles.headerRow}>
        <Text style={styles.price}>$25.50</Text>
        <View style={styles.rightSide}>
          <AntDesign style={styles.twoicons} name="minus-square" size={24} color="black" />
          <Text style={styles.number}>2</Text>
          <AntDesign style={styles.twoicons} name="plus-square" size={24} color="black" />
        </View>     
      </View>
      <TouchableOpacity style={styles.buyNowBtn} activeOpacity={0.8}>
        <Text style={styles.buyNowText}><AntDesign name="aliyun" size={24} color="black" /> Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: "PlusJakartaSans_700Bold",
    backgroundColor: "white",
    marginTop: -20,
    borderRadius: 25,
  },
  title: {
    fontWeight: "600",
    color: "#111111",
    fontSize: 40,
    padding: 28,

  },
  mg: {
    fontFamily: "PlusJakartaSans",
    color: "#96877c",
    fontSize: 21,
    padding:28,
    marginTop:-40,
    fontWeight:"400"
  },
  price: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#111111",
    fontSize: 40,
    fontWeight: "bold",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    margin:26,
    marginTop:-30
  },
  rightSide: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
  twoicons:{
    backgroundColor:"black",
    color:"#FBC528",
    marginTop:15,
  borderRadius: 25,
  width: 50,
  height: 50,
  textAlign: "center",
  textAlignVertical: "center",
  fontWeight: "bold",
  },
  number:{
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#111111",
    fontSize: 30,
    marginTop:20
  },
  buyNowBtn: {
    backgroundColor: "#FBC528",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    marginTop:5,
    margin:26
  },
  buyNowText: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#111111",
    fontSize: 20,
  },

});
