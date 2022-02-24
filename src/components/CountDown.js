import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet} from "react-native";
import {colors} from "react-native-elements";
import {paddingSizes, fontSizes} from "../utils/sizes";

const minutesToMiliseconds = (min) => min * 1000 * 60;
const FormartTime = (time) => (time < 10 ? `0${time}` : time);

export const CountDown = ({minutes = 20, isPaused, onProgress, onEnd}) => {
  const interval = React.useRef(null);

  const [millis, setMillis] = useState(minutesToMiliseconds(minutes));

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      //report time left
      onProgress(timeLeft / minutesToMiliseconds(minutes));
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMiliseconds(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <View>
      <Text style={styles.text}>
        {FormartTime(minute)}:{FormartTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    padding: paddingSizes.lg,
    color: colors.white,
    fontWeight: "bold",
    backgroundColor: "#d50000",
    justifyContent: "center",
    alignItems: "center",
  },
});
