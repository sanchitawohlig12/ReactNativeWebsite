import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import CategoryItem from "../components/CategoryItem/index";
import CustomHeader from "../components/CustomHeader";
import RenderSubcategory from "../components/RenderSubcategory/index";
import Swiper from "react-native-swiper";
import MangoIcon from "../images/icons/MangoIcon/index";

const categories = [
  {
    title: "Snacks and Drinks",
    subcategories: [
      { titleSubcategory: "Munchies" },
      { titleSubcategory: "Sweets" },
      { titleSubcategory: "Biscuits" },
      { titleSubcategory: "Cold Drinks" },
      { titleSubcategory: "Noodles, Pasta, Vermi" },
      { titleSubcategory: "Breakfast & Sauces" },
      { titleSubcategory: "Tea, coffee & more" },
      { titleSubcategory: "Dairy, Bread & Eggs" },
    ],
  },
  {
    title: "Beauty and Personal Care",
    subcategories: [
      { titleSubcategory: "Hair Care" },
      { titleSubcategory: "Cleaning Essentials" },
      { titleSubcategory: "Battery & Power" },
      { titleSubcategory: "Female Hygiene" },
      { titleSubcategory: "Cleaning Essentials" },
      { titleSubcategory: "Battery & Power" },
      { titleSubcategory: "Female Hygiene" },
      { titleSubcategory: "Hair Care" },
    ],
  },
];

const subcategories = [
  {
    id: 1,
    titleofSub: "Minute Maid Minute Maid Pulpy Orange Juice - Ready-To-Serve",
    quantity: "250g",
    cost: "₹24",
    icon: <MangoIcon width={50} height={50} />,
  },
  {
    id: 2,
    titleofSub: "Minute Maid Minute Maid Pulpy Mango Juice - Ready-To-Serve",
    quantity: "200g",
    cost: "₹34",
    icon: <MangoIcon width={50} height={50} />,
  },
  {
    id: 3,
    titleofSub:
      "Minute Maid Minute Maid Pulpy Pineapple Juice - Ready-To-Serve",
    quantity: "150g",
    cost: "₹40",
    icon: <MangoIcon width={50} height={50} />,
  },
];

const App = () => {
  const [title, setTitle] = useState("Product Categories");
  const [subTitle, setSubTitle] = useState("Select any product to add");
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const [bottomCategories, setBottomCategories] = useState(false);
  const [showSwiper, setShowSwiper] = useState(false);

  const handleCategoryPress = (title) => {
    setShowSwiper(true);
    setTitle(title);
    const selectedCategory = categories.find(
      (category) => category.title === title
    );
    selectedCategory.subcategories[0] = { titleSubcategory: "View All" };
    const array = [];
    array.push(selectedCategory);
    if (array) {
      setFilteredSubcategories(array);
    } else {
      setFilteredSubcategories(categories);
    }
  };

  const viewAll = () => {
    setTitle("Product Categories");
    setShowSwiper(false);
    const updatedCategories = categories.map((category) => ({
      ...category,
      subcategories: category.subcategories.map((sub) =>
        sub.titleSubcategory === "View All" &&
        category.title === "Snacks and Drinks"
          ? { titleSubcategory: "Munchies" }
          : sub.titleSubcategory === "View All" &&
            category.title === "Beauty and Personal Care"
          ? { titleSubcategory: "Hair Care" }
          : sub
      ),
    }));
    setFilteredSubcategories(updatedCategories);
  };

  const clickSubCategory = () => {
    if (
      filteredSubcategories[0].subcategories[0].titleSubcategory === "View All"
    ) {
      setBottomCategories(true);
    }
  };

  const flatLists = [];
  for (let i = 0; i < 4; i++) {
    flatLists.push(
      <FlatList
        key={i}
        data={
          filteredSubcategories.length > 0 ? filteredSubcategories : categories
        }
        renderItem={({ item }) => (
          <CategoryItem
            title={item.title}
            subcategories={item.subcategories}
            onPress={handleCategoryPress}
            clickSub={clickSubCategory}
            viewAll={viewAll}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }

  return (
    <View style={styles.container}>
      <CustomHeader title={title} subTitle={subTitle} />
      {!showSwiper && (
        <FlatList
          data={
            filteredSubcategories.length > 0
              ? filteredSubcategories
              : categories
          }
          renderItem={({ item }) => (
            <CategoryItem
              title={item.title}
              subcategories={item.subcategories}
              onPress={handleCategoryPress}
              clickSub={clickSubCategory}
              viewAll={viewAll}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <Text>{showSwiper}</Text>
      {showSwiper && (
        <View style={styles.swiperContainer}>
          <Swiper
            horizontal
            height={300}
            showsPagination={true}
            autoplay={false}
            autoplayTimeout={3}
            activeDot={<View style={styles.activeDotStyle} />}
            autoplayDirection
          >
            {flatLists}
          </Swiper>
        </View>
      )}
      <Modal
        transparent={true}
        visible={bottomCategories}
        animationType="slide"
        onRequestClose={() => setBottomCategories(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalBackdrop}
            activeOpacity={1}
            onPressOut={() => setBottomCategories(false)}
          />
          <View style={styles.modalContent}>
            <FlatList
              data={subcategories}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.flatListContainerStyle}
              renderItem={({ item }) => <RenderSubcategory item={item} />}
              bounces={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  swiperContainer: {
    justifyContent: "center",
    marginVertical: Platform.OS === "ios" ? 10 : 0,
    height: 350,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBackdrop: {
    flex: 1,
  },
  activeDotStyle: {
    backgroundColor: "#FFBE0B",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  modalContent: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    maxHeight: "50%",
  },
  flatListContainerStyle: {
    flexGrow: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
