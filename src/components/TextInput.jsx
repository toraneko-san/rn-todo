import { StyleSheet, TextInput } from "react-native";
import React from "react";

export default function CustomTextInput({ value, onChangeText, ...props }) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="rgba(0,0,0,0.5)"
      style={styles.textInput}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 20,
    height: 50,
    fontSize: 20,
  },
});
