import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import {Stack} from 'expo-router';
import { Text,View } from 'react-native';
import { Apptabs as AppTabs } from "../components/apptabs/Apptabs"
import {card as Card} from '../components/card/card';

export default function TabLayout() {
  return (
     
    <View>
            
      <AppTabs />
<Card/>
      </View>
)
}
