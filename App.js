import { StatusBar } from 'expo-status-bar';
//import ViewEffect from './src/pages/ViewEffect';
import ViewImages from './src/pages/ViewImages';
// import ViewState from './src/pages/ViewState';

export default function App() {

return(
  <>
  {/* <ViewState /> */}
  <ViewImages/>
  <StatusBar
    backgroundColor='#042940'
    translucent={false}
    style='light' />
  </>
)
  
}

