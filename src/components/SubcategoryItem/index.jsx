import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";

const SubcategoryItem = ({ title, Icon,viewAll,clickSub }) => {
 
  return (
    <View style={styles.main}>
      {title !=='View All' && (
      <TouchableOpacity style={styles.subcategoryItem} onPress={clickSub}>
        <Icon style={styles.icon} />
      </TouchableOpacity>
      )}
       {title !=='View All' && (
      <Text style={styles.title}>{title}</Text>
       )}
        {title ==='View All' && (
           <TouchableOpacity style={styles.subcategoryItem} onPress={viewAll}>
      <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
       )}
    </View>
  );
};

const styles = StyleSheet.create({
  subcategoryItem: {
    // flex: 1,
    // margin: 5,
    // padding: 5,
    width:80,
    height:80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F1EFEF",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    textAlign:'center',
    color:'#2A2A2A'
    // width:80
  },
  
  main:{
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    borderRadius: 10,
   
  }
});

export default SubcategoryItem;
