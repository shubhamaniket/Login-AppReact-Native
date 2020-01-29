import React from 'react';
import {View,ActivityIndicator,Text,Image,ScrollView,StyleSheet,TouchableOpacity,SafeAreaView,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
export default class Hello extends React.Component{
  state = {
    text : 'SIGNUP',
  };
  render(){
    return(
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.header}>Sign Up</Text>
          <Text style={styles.who}>WHO YOU ARE?</Text>
          <View style={styles.circles}>
          <TouchableOpacity>
            <View style={styles.male}>
              <Image source={{uri:'https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png'}} style={{width: 110,height: 120}}/>
              <Text style={{fontFamily: 'Bangers-Regular',color: '#fff',fontSize: 20,textAlign:'center',marginRight: 10}}>Male</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.female}>
              <Image source={{uri:'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png'}} style={{width: 100,height: 100,marginTop: 10}}/>
              <Text style={{fontFamily: 'Bangers-Regular',color: '#fff',fontSize: 20,textAlign:'center',marginTop: 8,marginRight: 15}}>FeMale</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.coder}>
              <Image source={{uri:'https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png'}} style={{width: 100,height: 100,marginTop: 10}}/>
              <Text style={{fontFamily: 'Bangers-Regular',color: '#fff',fontSize: 20,textAlign:'center',marginTop: 8,marginRight: 15}}>Coder</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputs}>
            <View style={styles.inputalign}>
              <TextInput style={[styles.textinput,styles.top1]} placeholder="Name" placeholderTextColor='#fff'> <Icon name='user' size={20} color='#fff'/>  Name</TextInput>
              <TextInput style={[styles.textinput,styles.top2]} placeholder="E-mail" placeholderTextColor='#fff'> <Icon name='envelope' size={20} color='#fff'/>  E-mail</TextInput>
              <TextInput style={[styles.textinput,styles.top3]} placeholder="Password" placeholderTextColor='#fff'> <Icon name='lock' size={20} color='#fff'/>  Password</TextInput>
              <TextInput style={[styles.textinput,styles.top4]} placeholder="Re-type Password" placeholderTextColor='#fff'> <Icon name='lock' size={20} color='#fff'/>  Re-type Password</TextInput>
              <TouchableOpacity onPress={()=>{this.indicatordetector}}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['orange','green']} style={{width: '100%',height: '35%',backgroundColor: 'yellow',marginTop: 15,borderRadius: 100}}>
                  <Text style={{alignSelf: 'center',marginTop: 15,fontWeight:'bold',color: '#fff'}}>{this.state.text}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#293046'
  },
  who : {
    textAlign: 'center',
    marginTop : 5,
    color: '#0079FE',
    fontWeight : 'bold' 
  },
  top1 : {
    marginTop: 20
  },
  top2 : {
    marginTop: 15
  },
  top3 : {
    marginTop: 15
  },
  top4 : {
    marginTop: 15
  } ,
  header : {
    fontFamily: 'Bangers-Regular',
    fontSize: 60,
    textAlign: 'center',
    marginTop: 20,
    color: '#fff' 
  },
  circles : {
    marginTop: 15,
    marginLeft: 6,
    width: '100%',
    height: '23%',
    display: 'flex',
    flexDirection: 'row', 
  },
  male : {
    flex:1,
  },
  female : {
    flex:1,
    marginLeft: 10
  },
  coder : {
    flex:1,
    marginLeft: 20
  },
  inputs : {
    height: '100%',
    width: '100%',
  },
  inputalign : {
    alignSelf: 'center',   
    width: '75%',
    height: '50%',
  },
  textinput : {
    borderWidth: 1,
    borderColor: '#0079FE',
    borderRadius: 100,
    color: '#fff',
    padding: 12
  }
});