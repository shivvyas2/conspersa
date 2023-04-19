//HomeScreen

//General Imports
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Screens
import FeedScreen from './Main/FeedScreen'
import Profile from './Main/Profile'
import Add from './Main/Add'


//Redux
import  {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchUser} from '../redux/actions/index'



const Tab = createBottomTabNavigator();

export class HomeScreen extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (

      <Tab.Navigator>
        <Tab.Screen name ='Feed' component={FeedScreen} options={{
          headerShown: false,
          tabBarIcon:(({color, size}) => (
            <MaterialCommunityIcons name = 'home' color={color} size = {26}/>
          )),
        }} />
           <Tab.Screen name ='Add' component={Add} options={{
            headerShown: false,
          tabBarIcon:(({color, size}) => (
            <MaterialCommunityIcons name = 'plus-box' color={color} size = {26}/>
          )),
        }} />
           <Tab.Screen name ='Profile' component={Profile} options={{
            headerShown: false,
          tabBarIcon:(({color, size}) => (
            <MaterialCommunityIcons name = 'account-circle' color={color} size = {26}/>
          )),
        }}/>
      </Tab.Navigator>
    );
  }
  

}
    const mapStateToProps = (store) => ({
  currentUser: store.usersState.currentUser,
});

 const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);


export default connect (mapStateToProps, mapDispatchProps) (HomeScreen);


