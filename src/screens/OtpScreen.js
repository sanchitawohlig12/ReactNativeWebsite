import React,{useRef} from 'react';
import { View, Text, StyleSheet, ImageBackground,Image,TouchableOpacity,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
    const navigation = useNavigation();
    const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const focusNext = (nextRef) => {
    nextRef.current.focus();
  };
    const goToNextPage = () => {
        navigation.navigate('Namepage');
      };
  return (
    <TouchableOpacity style={styles.backgroundImage}>
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgroundImage}>
       <View style={styles.overlay}>
       <View>
                <Text style={styles.heading}>Verification Code</Text>
                <Text style={styles.subheading}>Please enter code we just send to +91 99292 77633</Text>
            </View>
            <View style={styles.inputContainer}>
        <TextInput
          ref={input1Ref}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            if (text.length === 1) {
              focusNext(input2Ref);
            }
          }}
        />
        <TextInput
          ref={input2Ref}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            if (text.length === 1) {
              focusNext(input3Ref);
            }
          }}
        />
        <TextInput
          ref={input3Ref}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
            if (text.length === 1) {
              focusNext(input4Ref);
            }
          }}
        />
        <TextInput
          ref={input4Ref}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => {
           
          }}
        />
      </View>
      <Text style={styles.signuptext}>Didn’t receive OTP?</Text>
      <Text style={styles.signuUp}> Resend Code</Text>

      <TouchableOpacity style={styles.button} onPress={goToNextPage}>
      <View style={styles.buttonContent}>
       
        <Text style={styles.buttonText}>Verify</Text>
      </View>
    </TouchableOpacity>
    <Image source={require('../../assets/verify.png')} style={styles.centerImage} />

          </View>
        </ImageBackground>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centerImage: {
    width: '100%',
    marginTop:40,
  
    resizeMode: 'contain',
  },
  heading:{
    textAlign:'center',
    color:'black',
    fontWeight: 'bold',
    fontSize:29
  },
  subheading:{
    textAlign:'center',
    color:'black',
    paddingLeft:90,
    paddingRight:90,
    paddingTop:20
  },
  button: {
    backgroundColor: '#FF5069',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width:'90%',
    marginTop:30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor:'white'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    width:'100%'
  },
  signuptext: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    width:'70%',
    paddingTop:10,
    
  },
  signuUp:{
    color: '#FF5069',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    width:'70%',
    textDecorationLine: 'underline',
  }

});

export default OtpScreen;