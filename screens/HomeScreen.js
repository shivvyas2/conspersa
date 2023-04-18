//HomeScreen

//General Imports
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedScreen from './Main/FeedScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
          tabBarIcon:(({color, size}) => (
            <MaterialCommunityIcons name = 'home' color={color = "#30475E"} size = {26}/>
          

          )),
        }} />
      </Tab.Navigator>
    );
  }
  

}
    const mapStateToProps = (store) => ({
  currentUser: store.usersState.currentUser,
});

 const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);


export default connect (mapStateToProps, mapDispatchProps) (HomeScreen);


