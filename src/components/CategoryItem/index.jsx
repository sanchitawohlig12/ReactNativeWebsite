import React from "react";
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from "react-native";
import SubcategoryItem from "../SubcategoryItem/index";

import MunchiesIcon from "../../images/icons/MunchiesIcon/index";
import SweetIcon from "../../images/icons/SweetIcon/index";
import BiscuitIcon from "../../images/icons/BiscuitIcon/index";
import ColdDrinksIcon from "../../images/icons/ColdDrinksIcon/index";
import NoodlesIcon from "../../images/icons/NoodlesIcon/index";
import SaucesIcon from "../../images/icons/SaucesIcon/index";
import CoffeIcon from "../../images/icons/CoffeIcon/index";
import DairyIcon from "../../images/icons/DairyIcon/index";
import HairCareIcon from "../../images/icons/HairCareIcon/index";
import CleaningIcon from "../../images/icons/CleaningIcon/index";
import BatteryIcon from "../../images/icons/BatteryIcon/index";
import HygieneIcon from "../../images/icons/HygieneIcon/index";
import { useNavigation } from '@react-navigation/native';
import {Divider} from 'react-native-paper';


const getIconForSubcategory = (title) => {
  switch (title) {
    case "Munchies":
      return MunchiesIcon;
    case "Sweets":
      return SweetIcon;
    case "Biscuits":
      return BiscuitIcon;
    case "Cold Drinks":
      return ColdDrinksIcon;
      case "Noodles, Pasta, Vermi":
        return NoodlesIcon;
        case "Breakfast & Sauces":
            return SaucesIcon;
            case "Tea, coffee & more":
                return CoffeIcon;
                case "Dairy, Bread & Eggs":
                    return DairyIcon;
                    case "Hair Care":
                      return HairCareIcon;
                      case "Cleaning Essentials":
                      return CleaningIcon;
                      case "Battery & Power":
                        return BatteryIcon;
                        case "Female Hygiene":
                        return HygieneIcon;
    default:
      return ColdDrinksIcon; 
  }
};


const CategoryItem = ({ title, subcategories,onPress,viewAll,clickSub }) => {
  const navigation = useNavigation();
  const goToNextPage = () => {
    onPress(title); 
   };
  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity onPress={goToNextPage} style={{flexDirection:'row',alignItems: "center",justifyContent:'center'}}>
      <Text style={styles.title}>{title} </Text>
     
      <View style={styles.divider} />
      </TouchableOpacity>
      <FlatList
        data={subcategories}
        renderItem={({ item }) => {
          const Icon = getIconForSubcategory(item.titleSubcategory);
          return <SubcategoryItem title={item.titleSubcategory} Icon={Icon} viewAll={viewAll} clickSub={clickSub} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    color:'#6B6062'
  },
  divider: {
    flex: 1,
    height: 0.5,
    backgroundColor: "#F1EFEF",
  },
});

export default CategoryItem;
