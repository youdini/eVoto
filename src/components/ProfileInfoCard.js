import { View, Text } from "react-native";
import React from "react";

const ProfileInfoCard = ({ course, yearSection, description, address }) => {
  return (
    <View>
      <Text>Course: {course}</Text>
      <Text>Year & Section: {yearSection}</Text>
      <Text>Address: {address}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default ProfileInfoCard;
