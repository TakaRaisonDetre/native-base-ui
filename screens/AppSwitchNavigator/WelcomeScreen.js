import React from 'react'
import {View, Text, TouchableNativeFeedbackBase} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import  colors  from '../../assets/colors'
import CustomActionButton from '../../components/CustomActionButton'


 class WelcomeScreen extends React.Component  {
 
    render(){
  
          console.log(this.props.navigation)
       
   
     return(
      <View style={{flex:1, backgroundColor:colors.bgMain}}>
            <View style={{
                flex:1, 
                borderColor:'black', 
                alignItems:'center',
                justifyContent:'center'}}>
           <Ionicons name="ios-bookmarks" size={150} color={colors.logoColor}/>
       <Text style={{fontSize:50, fontWeight:'100' ,color:'white'}}>Book Worm</Text>
           </View>
         
     
            <View style={{flex:1, 
                borderColor:'orange', 
                alignItems:'center'}}>
            <CustomActionButton 
            style={{
                width:200, 
                backgroundColor:'transparent', 
                borderWidth:0.5,
                marginBottom:10,
                borderColor:colors.bgPrimary}}
                title="log in" 
                onPress={()=>this.props.navigation.navigate('HomeScreen')}>
            <Text style={{color:'white',}} >Login</Text>  
            </CustomActionButton>
            <CustomActionButton 
             style={{
                width:200, 
                backgroundColor:'transparent', 
                borderWidth:0.5,
                borderColor:colors.bgError}}
                title="Sign Up" 
                onPress={()=>this.props.navigation.navigate('SignUpScreen')}>
               <Text style={{color:'white'}} >Sign up</Text>  
            </CustomActionButton>

            </View>
          
     </View>
     )
 }


}
export default WelcomeScreen