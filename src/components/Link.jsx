import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function CustomLink({ children, link, ...props }) {
  return (
    <Link href={link} style={styles.link} {...props}>
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
