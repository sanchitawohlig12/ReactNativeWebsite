import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const PhotoScreen = () => {
  const [selectedImages, setSelectedImages] = useState([null, null, null, null, null]);

  const openImagePicker = (index) => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
       
      } else if (response.error) {
        
      } else if (response.assets && response.assets.length > 0) {
        const selectedAsset = response.assets[0];
        const newSelectedImages = [...selectedImages];
        newSelectedImages[index] = selectedAsset.uri;
        setSelectedImages(newSelectedImages);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.backgroundImage}>
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View>
            <Text style={styles.heading}>Upload your photo</Text>
            <Text style={styles.subheading}>We'd love to see you. Upload a photo for your dating journey.</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/photo.png')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.componentContainer}>
              <View style={styles.customComponent}>
                <TouchableOpacity style={styles.addCamera} onPress={() => openImagePicker(0)}>
                  {selectedImages[0] ? (
                    <Image source={{ uri: selectedImages[0] }} style={styles.selectedImage} />
                  ) : (
                    <Image source={require('../../assets/layer.png')} style={styles.centerImage} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.addCamera, { marginTop: 20 }]} onPress={() => openImagePicker(1)}>
                  {selectedImages[1] ? (
                    <Image source={{ uri: selectedImages[1] }} style={styles.selectedImage} />
                  ) : (
                    <Image source={require('../../assets/layer.png')} style={styles.centerImage} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.MainAddCamera}>
            <View style={styles.addCameraWrap}>
              <TouchableOpacity style={[styles.addCamera, { marginRight: 20 }]} onPress={() => openImagePicker(2)}>
                {selectedImages[2] ? (
                  <Image source={{ uri: selectedImages[2] }} style={styles.selectedImage} />
                ) : (
                  <Image source={require('../../assets/layer.png')} style={styles.centerImage} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.addCameraWrap}>
              <TouchableOpacity style={[styles.addCamera, { marginRight: 20 }]} onPress={() => openImagePicker(3)}>
                {selectedImages[3] ? (
                  <Image source={{ uri: selectedImages[3] }} style={styles.selectedImage} />
                ) : (
                  <Image source={require('../../assets/layer.png')} style={styles.centerImage} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.addCameraWrap}>
              <TouchableOpacity style={styles.addCamera} onPress={() => openImagePicker(4)}>
                {selectedImages[4] ? (
                  <Image source={{ uri: selectedImages[4] }} style={styles.selectedImage} />
                ) : (
                  <Image source={require('../../assets/layer.png')} style={styles.centerImage} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <Image source={require('../../assets/Vector.png')} style={styles.centerImageMain} />
          <TouchableOpacity style={styles.button}>
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
  centerImageMain: {
    width: 500,
    height: 200,
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
    width: '90%',
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    borderRadius: 10,
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
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 7,
    marginRight: 0,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },
  componentContainer: {
    flex: 3,
  },
  customComponent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  addCamera: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#FF5069',
    borderStyle: 'dashed',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainAddCamera: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  addCameraWrap: {},
  selectedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default PhotoScreen;
