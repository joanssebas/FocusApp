import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {TextInput} from "react-native-paper";
import {Icon} from "react-native-elements";
import {fontSizes, paddingSizes} from "../../utils/sizes";

export function Focus({addSubject}) {
  const [tempItem, setTempItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textImput}
            onSubmitEditing={({nativeEvent}) => {
              setTempItem(nativeEvent.text);
              console.log(tempItem);
            }}
          />

          <Icon
            type="material-community"
            name="plus-circle-outline"
            size={40}
            color="white"
            onPress={() => addSubject(tempItem)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 0.5,

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: fontSizes.lg,
    alignItems: "center",
  },
  textImput: {
    flex: 1,
    marginRight: paddingSizes.md,
  },
  inputContainer: {
    padding: paddingSizes.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
