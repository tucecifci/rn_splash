import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/girl1jpeg.jpeg")}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginContainer}>
      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>Do you have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.getAccountText}>Get One Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Log In</Text>
        <TextInput placeholder="E-posta" style={styles.input} />
        <TextInput placeholder="Şifre" style={styles.input} />
      </View>

      <View style={styles.forgetPassword}>
        <Text style={styles.accountText}>Forget Password?</Text>
        <TouchableOpacity>
          <Text style={styles.getAccountText}>Get New</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
        <MaterialIcons name="east" size={20} color="black" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#FEF0E1",
    paddingHorizontal: 24,
  },
  logoContainer: {
    width: "100%",
    height: "50%",
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  loginContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    gap: 16,
  },
  accountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountText: {
    fontSize: 12,
    color: "#12131A",
    fontWeight: "bold",
  },
  getAccountText: {
    color: "#0B1389",
    fontSize: 12,
    fontWeight: "bold",
  },
  
  loginText: {
    fontSize: 20,
    color: "#12131A",
    fontWeight: "bold",
    letterSpacing: 4,
    marginBottom: 16,
  },
  input: {
    padding: 12,
    backgroundColor: "#ECDFCF",
  },
  forgetPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 12,
    marginTop: 20,
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "#12131A",
    width: "50%",
    alignSelf: "flex-start",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  loginButtonText: {
    fontSize: 12,
    color: "#12131A",
    fontWeight: "bold",
  },
});
