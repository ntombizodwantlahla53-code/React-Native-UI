import { NativeTabs } from 'expo-router/native-tabs';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme } from 'expo-router';
import { Text } from 'react-native';
import classes from './apptabs.module.css';
import { MdArrowBackIos } from "react-icons/md";

export function apptabs() {

  return (
    <Text ><div className={classes.text}>
        <MdArrowBackIos/>Xefag
        </div>
    </Text>
  );
}