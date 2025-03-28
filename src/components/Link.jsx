import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function CustomLink({ children, link }) {
  return (
    <Link href={link} style={styles.link}>
      {children}
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    color: "rgb(50, 150, 250)",
  },
});
