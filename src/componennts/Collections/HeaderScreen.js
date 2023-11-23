import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeaderScreen() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Tunis");

  const updateSearch = (text) => {
    setSearch(text);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Afghanistan', value: 'af' },
    { label: 'Algeria', value: 'dz' },
    { label: 'Argentina', value: 'ar' },
    { label: 'Australia', value: 'au' },
    { label: 'Bangladesh', value: 'bd' },
    // Add more countries here
  ]);

  return (
    <View style={{flexWrap:'nowrap'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{width:'100%',flexDirection:'row',justifyContent:"space-between"}}>
          <View style={{width:'30%',height:'50%'}}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              listMode="MODAL"
              searchable={true}
              placeholder="Country"
              style={{backgroundColor: '#fff', borderColor: '#E0E0E0',height:'10%'}}
              dropDownContainerStyle={{backgroundColor: '#fff'}}
            />
          </View>
          <View style={{ ...styles.searchBar, flexDirection: 'row', justifyContent: 'flex-start' }}>
  <TextInput
    style={{ width:'70%' }}
    placeholder="Type Here..."
    value={search}
    onChangeText={updateSearch}
  />
  <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: 5 }}>
    <FontAwesome name="search" size={30} color="#000" />
  </TouchableOpacity>
</View>

        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
