import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Focus} from "./src/features/focus/Focus";
import {colors} from "./src/utils/colors";
import {Timer} from "./src/features/timer/Timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Valor");

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkRed,
  },
});
