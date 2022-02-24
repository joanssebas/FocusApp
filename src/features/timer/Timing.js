import React from "react";
import {View, StyleSheet} from "react-native";
import {Icon} from "react-native-elements/dist/icons/Icon";

export const Timing = ({onChangeTime}) => {
  return (
    <View style={styles.times}>
      <Icon
        type="material-community"
        name="numeric-10-circle"
        size={40}
        color="white"
        onPress={() => onChangeTime(10)}
        style={{margin: 20}}
      />

      <Icon
        type="material-community"
        name="dice-d20"
        size={40}
        color="white"
        onPress={() => onChangeTime(20)}
        style={{margin: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  times: {
    flexDirection: "row",
  },
});
