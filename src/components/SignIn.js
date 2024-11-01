import * as yup from "yup";
import { useFormik } from "formik";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    borderRadius: 16,

    backgroundColor: "white",

    top: "25%",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  formItem: {
    borderRadius: 8,

    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",

    marginBottom: 16,

    fontSize: 18,
  },
  button: {
    backgroundColor: "#0165D7",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  errorText: {
    color: "red",
    maxHeight: 10,
    // marginTop: -10,
    transform: [{ translateY: -18 }],
  },
});

const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username is required.")
    .required("Username is required."),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: SignInSchema,
    onSubmit,
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.formItem, styles.input]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <Text style={styles.errorText}>{formik.errors.username}</Text>
      <TextInput
        style={[styles.formItem, styles.input]}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      <Text style={styles.errorText}>{formik.errors.password}</Text>
      <Pressable
        style={[styles.formItem, styles.button]}
        onPress={formik.handleSubmit}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
