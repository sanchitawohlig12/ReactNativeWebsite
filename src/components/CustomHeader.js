import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Platform,
} from "react-native";
import FullscreenComponent from "./FullscreenComponent";

const CustomHeader = ({ title, subTitle }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleSearchPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleMain}>
        <TouchableOpacity style={styles.icon}>
          <Image
            source={require("../../assets/back.png")}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.icon} onPress={handleSearchPress}>
        <Image
          source={require("../../assets/search.png")}
          style={styles.backButton}
        />
      </TouchableOpacity>

      <Modal
        transparent={false}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <FullscreenComponent onClose={handleCloseModal} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "ios" ? 50 : 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: Platform.OS === "ios" ? 110 : 80,
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
  },
  titleMain: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2A2A2A",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    paddingTop: 10,
    color: "#2A2A2A",
  },
  icon: {
    padding: 10,
  },
  backButton: {
    width: 24,
    height: 24,
  },
});

export default CustomHeader;
