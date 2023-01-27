import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

export const ProfileInfoCard = ({
  course,
  yearSection,
  description,
  address,
}) => {
  return (
    <View>
      <Text>Course: {course}</Text>
      <Text>Year & Section: {yearSection}</Text>
      <Text>Address: {address}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    course: "",
    yearSection: "",
    description: "",
    address: "",
  });

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  const onCourseChanged = (text) => {
    setProfile({ ...profile, course: text });
  };

  const onYrSecChanged = (text) => {
    setProfile({ ...profile, yearSection: text });
  };

  const onDescChanged = (text) => {
    setProfile({ ...profile, description: text });
  };

  const onAddrChanged = (text) => {
    setProfile({ ...profile, address: text });
  };

  const handleSubmit = () => {
    setProfile;
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder="Course"
          autoCapitalize="words"
          value={profile.course}
          onChangeText={onCourseChanged}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Year and Section"
          autoCapitalize="words"
          value={profile.yearSection}
          onChangeText={onYrSecChanged}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Address"
          autoCapitalize="words"
          value={profile.address}
          onChangeText={onAddrChanged}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Description"
          autoCapitalize="words"
          multiline
          value={profile.description}
          onChangeText={onDescChanged}
        />
        <TouchableOpacity style={styles.button}>
          <Text>Update</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  textinput: {
    fontSize: 18,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  onFocus: {
    borderColor: "blue",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "lightskyblue",
    paddingVertical: 20,
    paddingHorizontal: 70,
    marginHorizontal: 40,
    alignSelf: "center",
    borderRadius: 100,
    position: "absolute",
    bottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
