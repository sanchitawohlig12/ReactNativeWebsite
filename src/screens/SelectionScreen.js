import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectionScreen = () => {
  const navigation = useNavigation();
  const goToNextPage = () => {
    navigation.navigate('Photopage');
  };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { label: 'Reading', image: require('../../assets/Reading.png') },
    { label: 'PhotoGraphy', image: require('../../assets/photography.png') },
    { label: 'Music', image: require('../../assets/music.png') },
    { label: 'Travel', image: require('../../assets/travel.png') },
    { label: 'Pets', image: require('../../assets/pet.png') },
    { label: 'Fashion', image: require('../../assets/fashion.png') },
  ];

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option)); 
    } else {
      if (selectedOptions.length < 7) { 
        setSelectedOptions([...selectedOptions, option]); 
      }
    }
  };

  return (
    <TouchableOpacity  style={styles.backgroundImage}>
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View>
            <Text style={styles.heading}>Select up to 3 interests</Text>
            <Text style={styles.subheading}>Tell us what piques your curiosity and passions</Text>
          </View>
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  selectedOptions.includes(option.label) && { backgroundColor: '#FF5069' },
                ]}
                onPress={() => handleOptionSelect(option.label)}
              >
                <Image
                  source={option.image}
                  style={[
                    styles.optionImage,
                    selectedOptions.includes(option.label) && { tintColor: 'white' }, // Change image color if selected
                  ]}
                />
                <Text style={[styles.optionText, selectedOptions.includes(option.label) && { color: 'white' }]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Image source={require('../../assets/verify.png')} style={styles.centerImage} />

          <TouchableOpacity style={styles.button} onPress={goToNextPage}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Continue</Text>
            </View>
          </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  centerImage: {
    width: '100%',
   
    resizeMode: 'contain',
  },
  heading: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 29,
    marginBottom: 10,
  },
  subheading: {
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF5069',
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: '100%',
    marginTop: 0,
    marginBottom: 20,
  },
  buttonContent: {
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    width: '48%', 
  },
  optionImage: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#333', 
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SelectionScreen;
