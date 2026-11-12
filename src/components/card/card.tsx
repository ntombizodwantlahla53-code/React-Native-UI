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
    fontFamily: "PlusJakartaSans_700Bold",
    fontWeight: "bold",
    color: "#111111",
    fontSize: 40,
    padding: 28,

  },
  mg: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#96877c",
    fontSize: 20,
    padding:28,
    marginTop:-40,
  },
  price: {
    fontFamily: "PlusJakartaSans_700Bold",
    color: "#111111",
    fontSize: 40,
    fontWeight: "bold",
  },

});
