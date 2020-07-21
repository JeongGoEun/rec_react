// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CalcPage from './pages/CalcPage';
import HousePage from './pages/House/HousePage';
import NewsPage from './pages/NewsPage';

import House_Date from './pages/House/House_Date';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function calcScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="CalcPage">
        <Stack.Screen
          name="CalcPage"
          component={CalcPage}
          options={{
            title: '부동산 계산기', //Set Header Title
            headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#545045', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              //fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function houseScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="HousePage"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#545045', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          //fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="HousePage"
        component={HousePage}
        options={{
          title: '내 집 마련', //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}

function newsScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="NewsPage"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#545045', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          //fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="NewsPage"
        component={NewsPage}
        options={{
          title: '부동산 뉴스', //Set Header Title
          
        }}/>
    </Stack.Navigator>
  );
}

function House_Date_Stack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="House_Date_Page"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#545045', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          //fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="House_Date_Page"
        component={House_Date}
        options={{
          title: '내 집 마련', //Set Header Title          
        }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#545045',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="CalcPage"
          options={{ drawerLabel: '부동산 계산기' }}
          component={calcScreenStack} />
        <Drawer.Screen
          name="HousePage"
          options={{ drawerLabel: '내 집 마련' }}
          component={houseScreenStack} />
        <Drawer.Screen
          name="NewsPage"
          options={{ drawerLabel: '부동산 뉴스' }}
          component={newsScreenStack} />        
        <Drawer.Screen
        name="House_Date_Page"
        options={{ drawerLabel: () => null,}}
        component={House_Date_Stack} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;