import { Apptabs as AppTabs } from "./../components/Apptabs/Apptabs"
import { Text, View } from "react-native";
import classes from './IndexX.module.css';

export default function HomeScreen() {
  return (
    <div className={classes.container}>
    <View>
      <AppTabs />
    </View>
    </div>
  );
}
{
  /* <div className={classes.expoLogoBackground} /> */
}
