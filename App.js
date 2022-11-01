import { NavigationContainer } from '@react-navigation/native';
import { AppContainer } from './Routing';
if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
export default function App() {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}



  // "@react-navigation/native-stack": "^6.9.1",
