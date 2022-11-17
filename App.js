import { StatusBar } from 'expo-status-bar';
import ViewEffect from './src/pages/ViewEffect';
import ViewImages from './src/pages/ViewImages';
import ViewState from './src/pages/ViewState';
import ViewMenu from './src/pages/ViewMenu';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {

return(
  <>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="ViewNav1" component={ViewMenu}/>
          <Stack.Screen name="ViewState" component={ViewState}/>
          <Stack.Screen name="ViewImages" component={ViewImages}/>
          <Stack.Screen name="ViewEffect" component={ViewEffect}/>
    </Stack.Navigator>
    
  </NavigationContainer>
  
  <StatusBar
    backgroundColor='#042940'
    translucent={false}
    style='light' />
  </>
)
  
}

