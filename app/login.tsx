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
import { Formik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const correctEmail = "Tuce@mail.com";
  const correctPassword = "123456";
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        if (
          values.email === correctEmail &&
          values.password === correctPassword
        ) {
          Toast.show({
            type: "success",
            text1: "You are logged in successfully",
            text2: "Welcome 👋",
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 60,
            bottomOffset: 40,
          });
          resetForm();
        }
      }}
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, resetForm }) => (
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
              <TextInput
                placeholder="E-posta"
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                placeholder="Şifre"
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.forgetPassword}>
              <Text style={styles.accountText}>Forget Password?</Text>
              <TouchableOpacity>
                <Text style={styles.getAccountText}>Get New</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
              <MaterialIcons name="east" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Formik>
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
  errorText: {
    color: "red",
    fontSize: 10,
    marginTop: -10,
    fontWeight: "400",
    letterSpacing: 0.7,
  },
});
