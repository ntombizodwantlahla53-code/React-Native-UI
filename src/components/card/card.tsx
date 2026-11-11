import { Button, StyleSheet, Text, View } from "react-native";
// import { MdOutlineArrowBackIos } from "react-icons/md";
import AntDesign from '@expo/vector-icons/AntDesign';

export function card() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relax 30 {"\n"}Dissolvable Wafers</Text>
      <Text style={styles.mg}>250mg</Text>
      <View style={styles.headerRow}>
      <Text style={styles.price}>$25.50</Text>
      <View style={styles.rightSide}>
      <AntDesign name="minus-square" size={24} color="black" />
      <Text style={styles.price}>2</Text>
     <AntDesign name="plus-square" size={24} color="black" />
      </View>
      </View>
      <Button title="Buy Now" color="yellow"></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: -20,
    borderRadius: 25,
  },
  title: {
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#111111",
    fontSize: 50,
    padding: 10,
  },
  mg: {
    color: "#96877c",
    fontSize: 20,
    padding: 10,
  },
  price: {
    color: "#111111",
    fontSize: 50,
    padding: 10,
  },
  headerRow: {
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: 15,
},
rightSide: {
  flexDirection: "row",
  justifyContent: "flex-end",
  gap: 15,
},
});
