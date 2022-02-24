import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";

export const RoundedBotton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "white",
      borderWidth: 2,
    },
    text: {
      color: "white",
      fontSize: 20,
    },
  });
