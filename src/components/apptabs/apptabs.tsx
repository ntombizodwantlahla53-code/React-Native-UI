import { NativeTabs } from 'expo-router/native-tabs';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme } from 'expo-router';
import { Text } from 'react-native';
import classes from './Apptabs.module.css';
import { MdArrowBackIos } from "react-icons/md";

export function Apptabs() {

  return (
    <Text ><div className={classes.text}>
        Xefag
        </div>
    </Text>
  );
}