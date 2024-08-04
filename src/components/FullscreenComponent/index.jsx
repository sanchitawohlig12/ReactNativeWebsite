import React, { useState, useMemo } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import ClearIcon from "../../images/icons/ClearIcon/index";
import GrayBackIcon from "../../images/icons/GrayBackIcon/index";
import GraySearchIcon from "../../images/icons/GraySearchIcon/index";
import { Chip } from "react-native-paper";
import MasalaIcon from "../../images/icons/MasalaIcon/index";
import SweetIcon from "../../images/icons/SweetIcon/index";
import SaucesIcon from "../../images/icons/SaucesIcon/index";
import CoffeIcon from "../../images/icons/CoffeIcon/index";
import DairyIcon from "../../images/icons/DairyIcon/index";
import MunchiesIcon from "../../images/icons/MunchiesIcon/index";
import BiscuitIcon from "../../images/icons/BiscuitIcon/index";
import NoodlesIcon from "../../images/icons/NoodlesIcon/index";
import RenderSubcategory from "../RenderSubcategory/index";
import MangoIcon from "../../images/icons/MangoIcon/index";
import ChocolateIcon from "../../images/icons/ChocolateIcon/index";
import AlmondIcon from "../../images/icons/AlmondIcon/index";
import Buttorscotch from "../../images/icons/Buttorscotch/index";
import WipeBerryIcon from "../../images/icons/WipeBerryIcon/index";
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const FullscreenComponent = ({ onClose }) => {
  const [text, setText] = useState("");
  const [selectedChips, setSelectedChips] = useState([]);

  const handleClear = () => {
    setText("");
  };

  const handleChipPress = (label) => {
    setText(label);
    setSelectedChips((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)
        : [...prevSelected, label]
    );
  };

  const chipLabels = [
    { label: "Sweet", icon: <SweetIcon width={20} height={20} /> },
    {
      label: "Masala, Dry Fruits & More",
      icon: <MasalaIcon width={20} height={20} />,
    },
    {
      label: "Breakfast & Sauces",
      icon: <SaucesIcon width={20} height={20} />,
    },
    { label: "Tea, coffee & more", icon: <CoffeIcon width={20} height={20} /> },
    {
      label: "Dairy, Bread & Eggs",
      icon: <DairyIcon width={20} height={20} />,
    },
    { label: "Snacks", icon: <MunchiesIcon width={20} height={20} /> },
    { label: "Biscuits", icon: <BiscuitIcon width={20} height={20} /> },
    {
      label: "Noodles, Pasta, Vermi",
      icon: <NoodlesIcon width={20} height={20} />,
    },
    { label: "Snacks", icon: <MunchiesIcon width={20} height={20} /> },
  ];
  const subcategories = [
    {
      id: 1,
      titleofSub: "Snickers Peanut Chocolate Bar",
      quantity: "250g",
      cost: "",
      icon: <ChocolateIcon width={30} height={30} />,
    },
    {
      id: 2,
      titleofSub: "Snickers Almond Chocolate Bar - 22g",
      quantity: "200g",
      cost: "",
      icon: <AlmondIcon width={30} height={30} />,
    },
    {
      id: 3,
      titleofSub: "Snickers Butterscotch Chocolate Bar - 22g",
      quantity: "150g",
      cost: "",
      icon: <Buttorscotch width={30} height={30} />,
    },
    {
      id: 4,
      titleofSub:
        "Snickers Berry Whip Chocolate Bar With  - 20gougat & Caramel",
      quantity: "150g",
      cost: "",
      icon: <WipeBerryIcon width={30} height={30} />,
    },
    {
      id: 5,
      titleofSub: "Minute Maid Minute Maid Pulpy Orange Juice - Ready-To-Serve",
      quantity: "250g",
      cost: "₹24",
      icon: <MangoIcon width={50} height={50} />,
    },
    {
      id: 6,
      titleofSub: "Minute Maid Minute Maid Pulpy Mango Juice - Ready-To-Serve",
      quantity: "200g",
      cost: "₹34",
      icon: <MangoIcon width={50} height={50} />,
    },
    {
      id: 7,
      titleofSub:
        "Minute Maid Minute Maid Pulpy Pineapple Juice - Ready-To-Serve",
      quantity: "150g",
      cost: "₹40",
      icon: <MangoIcon width={50} height={50} />,
    },
    {
      id: 8,
      titleofSub: "Snickers Peanut Chocolate Bar",
      quantity: "250g",
      cost: "₹24",
      icon: <ChocolateIcon width={50} height={50} />,
    },
    {
      id: 9,
      titleofSub: "Snickers Peanut Chocolate Bar",
      quantity: "200g",
      cost: "₹34",
      icon: <ChocolateIcon width={50} height={50} />,
    },
    {
      id: 10,
      titleofSub: "Snickers Peanut Chocolate Bar",
      quantity: "150g",
      cost: "₹40",
      icon: <ChocolateIcon width={50} height={50} />,
    },
  ];
  const filteredSubcategories = useMemo(() => {
    if (!text) return subcategories;
    return subcategories.filter((item) =>
      item.titleofSub.toLowerCase().includes(text.toLowerCase())
    );
  }, [text, subcategories]);

  const chipRows = chunkArray(chipLabels, 3);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={onClose}>
          <GrayBackIcon />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search to add products"
            placeholderTextColor="#C5BEC0"
            value={text}
            onChangeText={setText}
          />
          {text.length > 0 && (
            <TouchableOpacity style={styles.clearIcon} onPress={handleClear}>
              <ClearIcon />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.icon}>
          <GraySearchIcon />
        </TouchableOpacity>
      </View>

      {text.length === 0 && (
        <ScrollView
          contentContainerStyle={styles.chipContainer}
          style={styles.chipScroll}
        >
          {chipRows.map((row, index) => (
            <View key={index} style={styles.chipRow}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {row.map(({ label, icon }) => (
                  <Chip
                    key={label}
                    style={styles.chip}
                    selected={selectedChips.includes(label)}
                    onPress={() => handleChipPress(label)}
                    showSelectedCheck={false}
                  >
                    {label} {icon}
                  </Chip>
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
      )}
      {text.length > 0 && (
        <View style={styles.modalContent}>
          <FlatList
            data={filteredSubcategories}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContainerStyle}
            renderItem={({ item }) => <RenderSubcategory item={item} />}
            bounces={false}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginTop: Platform.OS === "ios" ? 60 : 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 8,
  },
  flatListContainerStyle: {
    flexGrow: 1,
  },
  modalContent: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",

    maxHeight: "85%",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: "black",
  },
  icon: {
    padding: 10,
  },
  clearIcon: {
    padding: 10,
  },
  chipContainer: {
    marginVertical: 0,
  },
  chipScroll: {
    marginHorizontal: 15,
  },
  chipRow: {
    flexDirection: "row",
    marginVertical: 5,
  },
  chip: {
    margin: 4,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F1EFEF",
  },
});

export default FullscreenComponent;
