import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './component/LoginPage';
import DashboardPage from './component/DashboardPage';
import Profile from './component/Profile';
import ErrorPage from './component/ErrorPage';
import { Button, View, StyleSheet } from 'react-native';
import ProductDetails from './component/ProductDetails';
import {Badge, Appbar } from 'react-native-paper';
import CreateCategory from './component/CreateCategory';
import SignUpPage from './component/SignUpPage';
import AddProducts from './component/AddProducts';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginPage,
    navigationOptions: {
      headerShown: false,
    },
  },

  Shopping: {
    screen: DashboardPage,
    navigationOptions: ({ navigation }) => ({
      title: "Green Shopping",
      headerRight: () => (
        <View style={{ flexDirection: 'row',height: 35, marginRight: 10 }}>
          <View style={{flexDirection:'row'}}>
          <Button title="Add Category"
            onPress={() => navigation.navigate('AddCategory')}
            color='limegreen'
          />
          {/* <Appbar.Action style={{backgroundColor:"limegreen",height:25,width:40,}} icon="plus" onPress={() => navigation.navigate('AddCategory')}/> */}
          {/* <View style={{width:0}}>
          <Badge>10</Badge>
          </View> */}
          </View>
          <View style={styles.space} />
          <Button title="Logout"
            onPress={() => navigation.navigate('Login')}
            color='limegreen'
          />
        </View>

      ),
      headerLeft: () => {
      }
    }),
  },
  Error: {
    screen: ErrorPage
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "User Profile",
    }
  },
  AddCategory: {
    screen: CreateCategory,
    navigationOptions: {
      title: " Add Category",
    }
  },
  SignUp:{
    screen:SignUpPage
  },
  AddProducts:{
    screen:AddProducts,
    navigationOptions: {
      title: "Add Products",
    }
  },
  ProductDetails: {
    screen: ProductDetails,
    navigationOptions: {
      title: "Product Information",
    }
  },
}, {
  initialRouteName: "Login"
});

const styles = StyleSheet.create({
  space: {
    width: 10,
  },
  icon: {
    marginLeft:10,
    height:35,
  },
})

export const AppContainer = createAppContainer(AppNavigator);