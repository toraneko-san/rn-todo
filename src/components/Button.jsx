import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CustomButton({ children, onPress, type = "" }) {
  return (
    <TouchableOpacity
      style={[styles.button, type == "secondary" ? styles.secondaryButton : {}]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 15,
    backgroundColor: "rgb(50, 150, 250)",
  },
  secondaryButton: { backgroundColor: "rgb(250,0,0)" },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(255, 255, 255)",
  },
});
