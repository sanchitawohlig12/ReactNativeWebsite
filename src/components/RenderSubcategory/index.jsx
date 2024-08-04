import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const RenderSubcategory = ({ item }) => {
  return (
    <>
      {item?.cost?.length <= 0 && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <View style={styles.subcategoryItemForNoCost}>{item.icon}</View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: "#2A2A2A",
              fontSize: 15,
              paddingLeft: 15,
              width: "80%",
            }}
          >
            {item.titleofSub} - {item.quantity}
          </Text>
        </View>
      )}
      {item?.cost?.length > 0 && (
        <View style={styles.main}>
          <View style={{ padding: 10 }}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#2A2A2A", fontSize: 18, flex: 8, height: 70 }}
              >
                {item.titleofSub}
              </Text>
              <View style={styles.subcategoryItem}>
                {item.icon}
              
              </View>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 20,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold",color:'#2A2A2A' }}>
                {item.quantity}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold",color:'#2A2A2A' }}>
                  {item.cost}
                </Text>
                <TouchableOpacity style={styles.buttonBorder}>
                  <Text style={styles.buttonText}>+ Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "#F1EFEF",
  },
  buttonText: {
    color: "#80B918",
    fontWeight: "bold",
  },
  buttonBorder: {
    // borderWidth:1,
    // borderColor:'#80B918',
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20,
    // Add shadow for iOS
    shadowColor: "#0000001F",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    // Add elevation for Android
    elevation: 4,
    marginLeft: 10,
  },
  subcategoryItem: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F1EFEF",
  },
  subcategoryItemForNoCost: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F1EFEF",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5.44 },
    shadowOpacity: 0.25, // 0.25 corresponds to 40% opacity
    shadowRadius: 8,
    elevation: 5, // For Android
    width: "100%",
    backgroundColor: "white",

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  imageContainer: {
    width: "100%",
    backgroundColor: "black",
    borderRadius: 8,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RenderSubcategory;
