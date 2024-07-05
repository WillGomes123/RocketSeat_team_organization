import { ThemeProvider } from 'styled-components';

import theme from './src/theme';
import { useFonts,Roboto_700Bold,Roboto_400Regular } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native';

import { StatusBar } from 'react-native';
import { Loading } from './src/Components/Loading';

import { Groups } from '@screens/Groups';
import { Players } from '@screens/Players';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded  ? <Players/> : <Loading/>}  
    </ThemeProvider>
    
  );
}


