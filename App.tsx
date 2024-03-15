import 'react-native-gesture-handler'
import { LogBox, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import * as Linking from "expo-linking"
import CartScreen from './src/screens/CartScreen';


const prefix = Linking.createURL('/');

LogBox.ignoreAllLogs()
export default function App() {
  const linking = {
    prefixes: [prefix],
    config:{
      screens:{
        Search:{
          screens:{
            CartScreen:{
              path:"cartScreen/:message",
              parse:{
                message:(message:string) => `erdem${message}`
              }
            }
          }
        }
      }
    }
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop:'15%'
  }
});
