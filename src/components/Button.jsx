import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CustomButton({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(255, 255, 255)",
  },
});
