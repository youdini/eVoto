import React from "react";
import { useScrollToTop } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import RoomCard from "../components/RoomCard";

const Room = () => {
  const ref = React.useRef(null);
  useScrollToTop(ref);
  return (
    <SafeAreaView style={styles.container}>
      {/* Scroll View for Scrolling */}
      <ScrollView style={styles.scrollView} ref={ref}>
        {/* Room Card Component */}
        <RoomCard
          title="SSC Election 2024"
          id={123123}
          imgURL="https://www.ccc.edu.ph/images/2022/11/18/dci-banner.png"
        />
        <RoomCard
          title="3-CS1 Room"
          id={2323232}
          imgURL="https://cdn3.vectorstock.com/i/1000x1000/59/87/computer-science-lab-logo-icon-design-vector-22915987.jpg"
        />
        <RoomCard
          title="3-CS2 Room"
          id={4515142}
          imgURL="https://img.freepik.com/premium-vector/computer-science-technology-logo-design-premium_610575-720.jpg?w=2000"
        />
        <RoomCard
          title="Outing Planning"
          id={1589182}
          imgURL="https://thumbs.dreamstime.com/z/design-can-be-used-as-logo-icon-as-complement-to-design-science-computer-logo-icon-design-125299381.jpg"
        />
        <RoomCard
          title="Outing Planning"
          id={1589182}
          imgURL="https://img.freepik.com/premium-vector/travel-planner-logo-design-set-holiday-event-planning-business-symbol-vacation-tourism-helpdesk_607579-500.jpg?w=2000"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  scrollView: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
});
