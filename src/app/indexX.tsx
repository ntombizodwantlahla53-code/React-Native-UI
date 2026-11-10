import { apptabs as AppTabs } from "@/components/apptabs/apptabs";
import { Text, View } from "react-native";
import classes from './indexX.module.css';

export default function HomeScreen() {
  return (
    <View className={classes.container}>
      <AppTabs />
    </View>
  );
}
{
  /* <div className={classes.expoLogoBackground} /> */
}
